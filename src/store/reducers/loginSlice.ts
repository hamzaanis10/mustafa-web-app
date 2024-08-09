import { LoginData } from '@/types/api-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userInfo: LoginData | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userInfo: null,
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<LoginData>) {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.userInfo = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem('accessToken');
    },
  },
});

export const { setUser, clearUser } = loginSlice.actions;
export default loginSlice.reducer;
