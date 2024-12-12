import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkMts, checkUser, createUser } from './authAPI';


const initialState = {
  loggedInUser:null,
  loggedInMTS: null,
  status: 'idle',
  error: null
};

// signUp API thunk
export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// LogIn Thunk
export const checkUserAsync = createAsyncThunk(
  'auth/checkuser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// LogIn Thunk for MTS || MTS
export const checkMtsAsync = createAsyncThunk(
  'auth/checkMts',
  async (loginInfo) => {
    const response = await checkMts(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        alert("User Created")
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        alert("Looged In")
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(checkMtsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkMtsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInMTS = action.payload;
        alert("Looged In")
      })
      .addCase(checkMtsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  },
});




export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectLoggedInMTS = (state) => state.auth.loggedInMTS;

export const selectError = (state) => state.auth.error;
export default authSlice.reducer;
