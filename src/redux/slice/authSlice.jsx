import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL } from "../../constants/Url";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AUTH_URL}authenticate`, formData);
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AUTH_URL}register`, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resendOTP = createAsyncThunk(
  'auth/resendOTP',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AUTH_URL}resendOTP`, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AUTH_URL}verifyOtp`, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyDoc = createAsyncThunk(
  'auth/verifyDoc',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AUTH_URL}verifyDoc`, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  id: null,
  user: null,
  token: null,
  role: null,
  subscription: null,
  error: null,
  isAuthenticated: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        // Handle pending state
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Handle fulfilled state
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Handle rejected state
      });
  },
});

export default authSlice.reducer;
