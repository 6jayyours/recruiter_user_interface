import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {JOBS_SERVICE, PUBLIC_JOBS } from "../../constants/Url";

export const createJob = createAsyncThunk(
  "admin/createJob",
  async (jobData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      // Get the token from the auth state
      const state = getState();
      const token = state.auth.token;
      const response = await axios.post(`${JOBS_SERVICE}postjob`, jobData,{
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

export const getAllJobs = createAsyncThunk(
  'admin/getAllJobs',
  async (_, thunkAPI) => {
    const { rejectWithValue} = thunkAPI;
    try {
      const response = await axios.get(`${PUBLIC_JOBS}getAllJobs`, {
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const getMyJob = createAsyncThunk(
  'admin/getMyJob',
  async (user, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      // Get the token from the auth state
      const state = getState();
      const token = state.auth.token;
      const response = await axios.get(`${JOBS_SERVICE}getMyJobs`, {
        params: { user },
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

export const getJob = createAsyncThunk(
  'admin/getJob',
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      // Get the token from the auth state
      const state = getState();
      const token = state.auth.token;
      const response = await axios.get(`${JOBS_SERVICE}getJob`, {
        params: {id },
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

export const applyForJob = createAsyncThunk(
  'jobs/applyForJob',
  async (formData, { rejectWithValue, getState }) => {
    try {
      // Get the token from the auth state
      const state = getState();
      const token = state.auth.token; // Adjust the path according to your state structure

      const response = await axios.post(`${JOBS_SERVICE}apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);




const initialState = {
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default jobSlice.reducer;
