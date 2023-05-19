import { combineReducers } from "redux";
import { usersReducer } from "./usersSlice";
import { followerReducer } from "./followerSlice";

export const reducer = combineReducers({
  users: usersReducer,
  followerOf: followerReducer,
});
