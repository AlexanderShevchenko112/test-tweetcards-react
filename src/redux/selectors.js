import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectFollower = (state) => state.followerOf;
export const selectError = (state) => state.users.error;

export const selectUsersFollowers = createSelector(
  [selectUsers, selectFollower],
  (users, follower) => {
    const usersFollowers = users.map((user) => ({
      ...user,
      isFollow: follower.includes(user.id),
    }));
    return usersFollowers;
  }
);
