import { createSlice } from "@reduxjs/toolkit";

const followerSlice = createSlice({
  name: "follower",
  initialState: [],
  reducers: {
    addFollowId: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    removeFollowId: {
      reducer(state, action) {
        const index = state.indexOf(action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  },
});

export const { addFollowId, removeFollowId } = followerSlice.actions;
export const followerOfReducer = followerSlice.reducer;
