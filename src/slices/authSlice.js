import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: true
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
    updateAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.user = action.payload.user;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
})

export const { loginSuccess, logoutSuccess, updateAuth, setLoading } = authSlice.actions

export default authSlice.reducer