import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64673771ba7110b663b23d66.mockapi.io";

export const getUsers = createAsyncThunk(
  "users/users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users/users");
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  "users/users/toggleFollowing",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(`users/users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
