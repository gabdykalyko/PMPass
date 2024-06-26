import { createSlice } from '@reduxjs/toolkit'
import Hotjar from '@hotjar/browser'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: null,
    isLoading: true
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.user = action.payload.user
      localStorage.setItem('isAuthenticated', 'true')

      if (state.user) {
        Hotjar.identify(state.user.pm_id, {
          phone: state.user.phone,
        })
      }
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false
      state.user = null
      localStorage.removeItem('isAuthenticated')
    },
    updateAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.user = action.payload.user

      if (state.user) {
        Hotjar.identify(state.user.pm_id, {
          phone: state.user.phone,
        })
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
})

export const { loginSuccess, logoutSuccess, updateAuth, setLoading } = authSlice.actions

export default authSlice.reducer