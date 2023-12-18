/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';

import type { RootState } from './store';

// Define a type for the slice state
export interface Member {
  name: string;
  role: string;
  avatarUrl: string;
  year: string;
  executive: string;
  markdown?: string;
  links: {
    Website?: string;
    Linkedin?: string;
    Instagram?: string;
    Github?: string;
  };
}

interface MemberState {
  members: Member[];
}

export const getAllMembers = createAsyncThunk<
  Member[],
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('members/fetchAllMembers', async () => {
  interface MemberResponse extends Member {
    avatar: DataAttribute<{
      url: string;
    }>;
  }

  const response: DataAttributes<MemberResponse> = await getAPI('/team-members?populate=*');
  const parsedMembers: Member[] = [];

  if (response?.data) {
    response.data.forEach(
      ({ attributes: { name, role, avatar, executive, year, markdown, links } }) =>
        parsedMembers.push({
          role,
          name,
          avatarUrl: `${process.env.NEXT_PUBLIC_API_URL}${avatar.data.attributes.url}`,
          executive,
          year,
          markdown,
          links,
        })
    );
  }
  return parsedMembers;
});

// Define the initial state using that type
const initialState: MemberState = {
  members: [],
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all members
    builder.addCase(getAllMembers.fulfilled, (state, action) => {
      state.members = action.payload;
    });
  },
});

export default memberSlice.reducer;
