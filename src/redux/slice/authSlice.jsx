import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL } from "../../constants/Url";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AUTH_URL}authenticate`, formData);
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
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.subscription = action.payload.subscription;
      state.isAuthenticated = true;
      state.error = null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    });
  },
});

export default authSlice.reducer;
