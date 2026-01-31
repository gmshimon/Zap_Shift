import axiosSecure from '@/utils/axiosSecure'
import axios from '@/utils/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoginLoading: false,
  isLoginError: false,
  isLoginSuccess: false,

  isFetchingUserData: false,
  isFetchUserDataError: false,
  isFetchUserDataSuccess: false,

  isCreateUserLoading: false,
  isCreateUserError: false,
  isCreateUserSuccess: false
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post('/user/login', credentials)
      const { token } = response.data

      if (token && typeof window !== 'undefined') {
        localStorage.setItem(
          'userToken',
          JSON.stringify({ access_token: token })
        )
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSliceReset: state => {
      state.isLoginLoading = false
      state.isLoginError = false
      state.isLoginSuccess = false

      state.isFetchingUserData = false
      state.isFetchUserDataError = false
      state.isFetchUserDataSuccess = false

      state.isCreateUserLoading = false
      state.isCreateUserError = false
      state.isCreateUserSuccess = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.isLoginLoading = true
        state.isLoginError = false
        state.isLoginSuccess = false
      })
      .addCase(loginUser.fulfilled, state => {
        state.isLoginLoading = false
        state.isLoginError = false
        state.isLoginSuccess = true
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoginLoading = false
        state.isLoginError = true
        state.isLoginSuccess = false
      })
  }
})


export const {
    userSliceReset,
} = userSlice.actions

export default userSlice.reducer