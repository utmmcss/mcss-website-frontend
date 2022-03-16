/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'underscore';

import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import type { RootState } from './store';

// Define a type for the slice state
interface Academic {
  title: string;
  creator: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  categories: string[];
  featured: boolean;
  description: string;
}
interface AcademicState {
  academics: Record<number, Academic>;
  categories: string[];
}

export const getAllAcademicCategories = createAsyncThunk<
  string[],
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('academics/fetchAllCategories', async () => {
  interface CategoryResponse {
    type: string;
  }

  const response: DataAttributes<CategoryResponse> = await getAPI('/academics-categories');
  let parsedCategories: string[] = [];

  if (response?.data) {
    parsedCategories = response.data.map(({ attributes }) => attributes.type);
  }

  return parsedCategories;
});

export const getAllAcademics = createAsyncThunk<
  Record<number, Academic>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('academics/fetchAllAcademics', async () => {
  interface AcademicResponse extends Omit<Academic, 'categories'> {
    updatedAt: string;
    categories: DataAttributes<{ type: string }>;
    cover_image: DataAttribute<{ url: string }>;
  }

  interface APIResponse {
    data: {
      id: number;
      attributes: AcademicResponse;
    }[];
  }

  const response: APIResponse = await getAPI('/academics?populate=*');
  const parsedAcademics: Record<number, Academic> = {};

  if (response?.data) {
    response.data.forEach(
      ({
        id,
        attributes: {
          title,
          creator,
          cover_image,
          content,
          categories,
          featured,
          updatedAt,
          description,
        },
      }) => {
        const parsedCategories = !_.isEmpty(categories.data)
          ? categories.data.map(({ attributes: { type } }) => type)
          : ['Other'];

        parsedAcademics[id] = {
          title,
          creator,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
          content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
          categories: parsedCategories,
          featured,
          updatedDatetime: updatedAt,
          description,
        };
      },
    );
  }
  return parsedAcademics;
});

// Define the initial state using that type
const initialState: AcademicState = {
  academics: [],
  categories: [],
};

const academicSlice = createSlice({
  name: 'academics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all academics
    builder.addCase(getAllAcademics.fulfilled, (state, action) => {
      state.academics = action.payload;
    });

    // load all academic categories
    builder.addCase(getAllAcademicCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default academicSlice.reducer;
