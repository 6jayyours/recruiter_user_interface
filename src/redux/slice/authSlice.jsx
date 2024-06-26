import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_URL, USER_SERVICE } from "../../constants/Url";

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

export const listCandidates = createAsyncThunk(
  "admin/listCandidates",
  async (formData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      // Get the token from the auth state
      const state = getState();
      const token = state.auth.token;
      const response = await axios.get(`${USER_SERVICE}users`, {
        params: formData,
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


export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      
      const response = await axios.get(`${USER_SERVICE}candidate`, {
        params:{id},
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
  reducers: {
    logoutUser: (state) => {
      state.id = null;
      state.user = null;
      state.token = null;
      state.role = null;
      state.subscription = null;
      state.error = null;
      state.isAuthenticated = false;
    },
  },
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
    })
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
