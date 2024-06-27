import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_URL, AUTH_URL, USER_SERVICE } from "../../constants/Url";

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
          Authorization: `Bearer ${token}`,
        },
      });
      return rejectWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllJobs = createAsyncThunk(
  'admin/getAllJobs',
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      // Get the token from the auth state
      const state = getState();
      const token = state.auth.token;
      const response = await axios.get(`${ADMIN_URL}jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const profilePicture = createAsyncThunk(
  "admin/profilePicture",
  async ({ formData }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token; // Assuming token is stored in auth slice
      const response = await axios.post(`${USER_SERVICE}profilePicture`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Explicitly setting content type
          },
        }
      );
      return response.data; // Return the response data on success
    } catch (error) {
      return rejectWithValue(error.message); // Reject with the error message on failure
    }
  }
);

export const getPicture = createAsyncThunk(
  "admin/getPicture",
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token; // Assuming token is stored in auth slice
      const response = await axios.get(`${USER_SERVICE}getProfileImage`, {
        params: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
