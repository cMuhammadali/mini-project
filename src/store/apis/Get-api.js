import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getApi = createAsyncThunk("get/users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const getSlice = createSlice({
  name: "getApi",
  initialState: { data: [], status: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getApi.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default getSlice.reducer;
