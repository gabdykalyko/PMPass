import { createSlice } from '@reduxjs/toolkit'
import Hotjar from '@hotjar/browser'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: true
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.user = action.payload.user;

      Hotjar.identify(action.payload.user.pm_id, {
        phone: action.payload.user.phone,
      })
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.user = action.payload.user;

      Hotjar.identify(action.payload.user.pm_id, {
        phone: action.payload.user.phone,
      })
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
})

export const { loginSuccess, logoutSuccess, updateAuth, setLoading } = authSlice.actions

export default authSlice.reducer