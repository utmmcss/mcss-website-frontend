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
  creator: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  categories: string[];
  featured: boolean;
  description: string;
}
interface BlogState {
  blogs: Record<number, Blog>;
  categories: string[];
}

export const getAllBlogCategories = createAsyncThunk<
  string[],
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('blogs/fetchAllCategories', async () => {
  interface CategoryResponse {
    type: string;
  }

  const response: DataAttributes<CategoryResponse> = await getAPI('/blog-categories');
  let parsedCategories: string[] = [];

  if (response?.data) {
    parsedCategories = response.data.map(({ attributes }) => attributes.type);
  }

  return parsedCategories;
});

export const getAllBlogs = createAsyncThunk<
  Record<number, Blog>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('blogs/fetchAllBlogs', async () => {
  interface BlogResponse extends Omit<Blog, 'categories'> {
    updatedAt: string;
    categories: DataAttributes<{ type: string }>;
    cover_image: DataAttribute<{ url: string }>;
  }

  interface APIResponse {
    data: {
      id: number;
      attributes: BlogResponse;
    }[];
  }

  const response: APIResponse = await getAPI('/blogs?populate=*');
  const parsedBlogs: Record<number, Blog> = {};

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

        parsedBlogs[id] = {
          title,
          creator,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
          content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
          categories: parsedCategories,
          featured,
          updatedDatetime: updatedAt,
          description,
        };
      }
    );
  }
  return parsedBlogs;
});

// Define the initial state using that type
const initialState: BlogState = {
  blogs: [],
  categories: [],
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

    // load all blog categories
    builder.addCase(getAllBlogCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default blogSlice.reducer;
