/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import _ from 'underscore';

import type { RootState } from './store';

// Define a type for the slice state
interface Partner {
  title: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  featured: boolean;
  description: string;
  partnerUrl: string;
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
    cover_image: DataAttribute<{ url: string }>;
    partner_url: string;
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
        attributes: {
          title,
          cover_image,
          content,
          featured,
          updatedAt,
          description,
          partner_url: partnerUrl,
        },
      }) => {
        parsedPartners[id] = {
          title,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
          content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
          featured,
          updatedDatetime: updatedAt,
          description,
          partnerUrl,
        };
      }
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
