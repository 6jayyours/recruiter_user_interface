import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_URL } from "../../constants/Url";

export const listUsers = createAsyncThunk(
    "admin/listUsers",
    async (formData, thunkAPI) => {
      const { rejectWithValue, getState } = thunkAPI;
      try {
        // Get the token from the auth state
        const state = getState();
        const token = state.auth.token;
  
        const response = await axios.get(`${ADMIN_URL}users`, {
          params: formData,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const initialState = {
  users: null,
  recruiters: null,
  jobs: null,
  applications: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default adminSlice.reducer;
