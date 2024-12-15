import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkLawyer, checkMts, checkUser, createUser, logOut } from './authAPI';


const initialState = {
  loggedInUser:null,
  loggedInMTS: null,
  loggedInLawyer: null,
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

// LogIn Thunk for client
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

// LogIn Thunk for Lawyer || LAWYER
export const checkLawyerAsync = createAsyncThunk(
  'auth/checkLawyer',
  async (loginInfo) => {
    const response = await checkLawyer(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


// LogOut thunk for all user 
export const logOutAsync = createAsyncThunk(
  'auth/logOut',
  async () => {
    const response = await logOut();

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
      })
      .addCase(checkLawyerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkLawyerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInLawyer = action.payload;
        alert("Lawyer Looged In")
      })
      .addCase(checkLawyerAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(logOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
        state.loggedInMTS = null;
      });
  },
});




export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectLoggedInMTS = (state) => state.auth.loggedInMTS;
export const selectLoggedInLawyer = (state) => state.auth.loggedInLawyer;

export const selectError = (state) => state.auth.error;
export default authSlice.reducer;
