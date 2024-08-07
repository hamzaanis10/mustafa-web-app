import { LoginData } from '@/types/api-types';
import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userInfo: LoginData | null;
  isAuthenticated: boolean;
  accessToken: string | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  isAuthenticated: false,
  accessToken: null,
  status: 'idle',
  error: null,
};

export const loadUser = createAsyncThunk<LoginData | null, void>(
    'user/loadUser',
    async (_, { rejectWithValue }) => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          return JSON.parse(storedUser);
        }
        return null;
      } catch (error) {
        return rejectWithValue('Failed to load user');
      }
    }
  );

  const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setUser(state, action: PayloadAction<{ userInfo: LoginData; accessToken: string }>) {
        state.userInfo = action.payload.userInfo;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
  
        localStorage.setItem('user', JSON.stringify(action.payload.userInfo));
        localStorage.setItem('accessToken', action.payload.accessToken);
      },
      clearUser(state) {
        state.userInfo = null;
        state.accessToken = null;
        state.isAuthenticated = false;
  
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
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
  
          if (action.payload) {
            const storedAccessToken = localStorage.getItem('accessToken');
            if (storedAccessToken) {
              state.accessToken = storedAccessToken;
            }
          }
        })
        .addCase(loadUser.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string;
        });
    },
  });
  

export const { setUser, clearUser } = loginSlice.actions;

export default loginSlice.reducer;
