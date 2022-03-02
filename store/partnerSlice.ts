/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'underscore';

import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import type { RootState } from './store';

// Define a type for the slice state
interface Partner {
  title: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  categories: string[];
  featured: boolean;
  description: string;
}
interface PartnerState {
  partners: Record<number, Partner>;
  categories: string[];
}

export const getAllPartnerCategories = createAsyncThunk<
  string[],
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('partners/fetchAllCategories', async () => {
  interface CategoryResponse {
    type: string;
  }

  const response: DataAttributes<CategoryResponse> = await getAPI('/partner-categories');
  let parsedCategories: string[] = [];

  if (response?.data) {
    parsedCategories = response.data.map(({ attributes }) => attributes.type);
  }

  return parsedCategories;
});

export const getAllPartners = createAsyncThunk<
  Record<number, Partner>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('partners/fetchAllPartners', async () => {
  interface PartnerResponse extends Omit<Partner, 'categories'> {
    updatedAt: string;
    categories: DataAttributes<{ type: string }>;
    cover_image: DataAttribute<{ url: string }>;
  }

  interface APIResponse {
    data: {
      id: number;
      attributes: PartnerResponse;
    }[];
  }

  const response: APIResponse = await getAPI('/partners?populate=*');
  const parsedPartners: Record<number, Partner> = {};

  if (response?.data) {
    response.data.forEach(
      ({
        id,
        attributes: { title, cover_image, content, categories, featured, updatedAt, description },
      }) => {
        const parsedCategories = !_.isEmpty(categories.data)
          ? categories.data.map(({ attributes: { type } }) => type)
          : ['Other'];

        parsedPartners[id] = {
          title,
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

  return parsedPartners;
});

// Define the initial state using that type
const initialState: PartnerState = {
  partners: [],
  categories: [],
};

const partnerSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all partners
    builder.addCase(getAllPartners.fulfilled, (state, action) => {
      state.partners = action.payload;
    });

    // load all partner categories
    builder.addCase(getAllPartnerCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default partnerSlice.reducer;
