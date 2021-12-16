/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAPI } from '@utils/helper';
import type { RootState } from './store';

// Define a type for the slice state
export interface Member {
  name: string;
  role: string;
  avatarUrl: string;
  websiteUrl: string;
  executive: string;
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
    avatar: {
      url: string;
    };
    website_url: string;
  }

  const response: MemberResponse[] = await getAPI('/team-members');
  const parsedMembers: Member[] = [];

  if (response) {
    response.forEach(({ name, role, avatar, website_url, executive }) =>
      parsedMembers.push({
        role,
        name,
        avatarUrl: `${process.env.NEXT_PUBLIC_API_URL}${avatar.url}`,
        websiteUrl: website_url,
        executive,
      }),
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
