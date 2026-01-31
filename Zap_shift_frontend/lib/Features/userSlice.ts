import axiosSecure from '@/utils/axiosSecure'
import axios from '@/utils/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoginLoading: false,
  isLoginError: false,
  isLoginSuccess: false,

  isFetchUserDataLoading: false,
  isFetchUserDataError: false,
  isFetchUserDataSuccess: false,

  isCreateUserLoading: false,
  isCreateUserError: false,
  isCreateUserSuccess: false
}

export const createUser = createAsyncThunk(
  'user/createUser',
  async (
    userDetails: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post('/user/signup', userDetails)
      return response.data.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)


export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post('/user/login', credentials)
      const { token } = response.data.data

      if (token && typeof window !== 'undefined') {
        localStorage.setItem(
          'userToken',
          JSON.stringify({ access_token: token })
        )
      }
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await axiosSecure.get('/user/me')
      return response.data.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message ?? String(error))
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

      state.isFetchUserDataLoading = false
      state.isFetchUserDataError = false
      state.isFetchUserDataSuccess = false

      state.isCreateUserLoading = false
      state.isCreateUserError = false
      state.isCreateUserSuccess = false
    },
    logout: () => {
      return { ...initialState }
    }
  },
  extraReducers: builder => {
    builder
    .addCase(createUser.pending, state => {
        state.isCreateUserLoading = true
        state.isCreateUserError = false
        state.isCreateUserSuccess = false
      })
      .addCase(createUser.fulfilled, state => {
        state.isCreateUserLoading = false
        state.isCreateUserError = false
        state.isCreateUserSuccess = true
      })
      .addCase(createUser.rejected, state => {
        state.isCreateUserLoading = false
        state.isCreateUserError = true
        state.isCreateUserSuccess = false
      })
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
      .addCase(loginUser.rejected, state => {
        state.isLoginLoading = false
        state.isLoginError = true
        state.isLoginSuccess = false
      })
      .addCase(fetchUserData.pending, state => {
        state.isFetchUserDataLoading = true
        state.isFetchUserDataError = false
        state.isFetchUserDataSuccess = false
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isFetchUserDataLoading = false
        state.isFetchUserDataError = false
        state.isFetchUserDataSuccess = true
        state.user = action.payload
      })
      .addCase(fetchUserData.rejected, state => {
        state.isFetchUserDataLoading = false
        state.isFetchUserDataError = true
        state.isFetchUserDataSuccess = false
      })
  }
})

export const { userSliceReset, logout } = userSlice.actions

export default userSlice.reducer
