/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import _ from 'underscore';

import type { RootState } from './store';

// Define a type for the slice state
interface Blog {
  title: string;
  coverImageUrl: string;
  featured: boolean;
  updatedDatetime: string;
  author?: string;
  content?: string;
  description?: string;
  tags:
    | {
        id: number;
        Tag: string;
      }[]
    | [];
}
interface BlogState {
  blogs: Record<number, Blog>;
}

export const getAllBlogs = createAsyncThunk<
  Record<number, Blog>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('blogs/fetchAllBlogs', async () => {
  interface BlogResponse extends Blog {
    updatedAt: string;
    cover: DataAttribute<{ url: string }>;
  }

  interface APIResponse {
    data: {
      id: number;
      attributes: BlogResponse;
    }[];
  }

  const parsedBlogs: Record<number, Blog> = {};
  const response: APIResponse = await getAPI('/blogs?populate=*');

  if (response?.data) {
    response.data.forEach(
      ({
        id,
        attributes: { title, cover, featured, updatedAt, author, content, description, tags },
      }) => {
        console.log('here');
        parsedBlogs[id] = {
          title,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover.data.attributes.url}`,
          featured,
          updatedDatetime: updatedAt,
          author,
          content: content?.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
          description,
          tags,
        };
      }
    );
  }
  return parsedBlogs;
});

// Define the initial state using that type
const initialState: BlogState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all blogs
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
  },
});

export default blogSlice.reducer;
