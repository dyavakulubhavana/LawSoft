import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLawyers } from "./SearchLawyerAPI";

const initialState = {
  lawyers: [],
  status: "idle",
};

export const fetchLawyersAsync = createAsyncThunk(
  "searchLawyer/fetchLawyers",
  async () => {
    const response = await fetchLawyers();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const searchLawyerSlice = createSlice({
  name: "searchLawyer",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLawyersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLawyersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.lawyers = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectLawyers = (state) => state.searchLawyer.lawyers;


export default searchLawyerSlice.reducer;
