import { createSlice } from "@reduxjs/toolkit";
import { getUsers, toggleFollow } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledToggleFollow = (state, action) => {
  const index = state.items.findIndex((user) => user.id === action.payload.id);
  state.items[index] = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    follow: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers += 1;
      }
    },
    unfollow: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers -= 1;
      }
    },
  },
  extraReducers: {
    [getUsers.pending]: handlePending,
    [getUsers.fulfilled]: handleFulfilled,
    [getUsers.rejected]: handleRejected,
    [toggleFollow.pending]: handlePending,
    [toggleFollow.fulfilled]: handleFulfilledToggleFollow,
    [toggleFollow.rejected]: handleRejected,
  },
});
export const { follow, unfollow } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
