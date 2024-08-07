import { LoginData } from '@/types/api-types';
import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userInfo: LoginData | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

export const loadUser = createAsyncThunk<LoginData | null, void>(
    'user/loadUser',
    async (_, { rejectWithValue }) => {
      try {
        // Simulate an async operation (e.g., fetching from local storage or API)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          return JSON.parse(storedUser);
        }
        return null; // Return null if no user is found
      } catch (error) {
        return rejectWithValue('Failed to load user');
      }
    }
  );

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<LoginData>) {
      state.userInfo = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser(state) {
      state.userInfo = null;
      state.isAuthenticated = false;

      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload;
        state.isAuthenticated = action.payload !== null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser } = loginSlice.actions;

export default loginSlice.reducer;
