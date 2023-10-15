/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import _ from 'underscore';

import type { RootState } from './store';

// Define a type for the slice state
interface Sponsor {
  title: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  featured: boolean;
  description: string;
  sponsorUrl: string;
}
interface SponsorState {
  sponsors: Record<number, Sponsor>;
}

export const getAllSponsors = createAsyncThunk<
  Record<number, Sponsor>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('sponsors/fetchAllSponsors', async () => {
  interface SponsorResponse extends Sponsor {
    updatedAt: string;
    cover_image: DataAttribute<{ url: string }>;
    sponsor_url: string;
  }

  interface APIResponse {
    data: {
      id: number;
      attributes: SponsorResponse;
    }[];
  }

  const response: APIResponse = await getAPI('/sponsors?populate=*');
  const parsedSponsors: Record<number, Sponsor> = {};

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
          sponsor_url: sponsorUrl,
        },
      }) => {
        parsedSponsors[id] = {
          title,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
          content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
          featured,
          updatedDatetime: updatedAt,
          description,
          sponsorUrl,
        };
      }
    );
  }

  return parsedSponsors;
});

// Define the initial state using that type
const initialState: SponsorState = {
  sponsors: [],
};

const sponsorSlice = createSlice({
  name: 'sponsors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all sponsors
    builder.addCase(getAllSponsors.fulfilled, (state, action) => {
      state.sponsors = action.payload;
    });
  },
});

export default sponsorSlice.reducer;
