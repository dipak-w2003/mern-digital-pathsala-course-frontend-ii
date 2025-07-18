import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IRegisterData, IUserLoginData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import API from "@/lib/http";
import { AppDispatch } from "../store";
const initialState: IInitialState = {
  user: {
    email: "",
    password: "",
  },
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserLoginData>) {
      state.user = action.payload;
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;

// Thunks or API Calls functions

export function registerUser(data: IRegisterData) {
  return async function registerUserThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("auth/register", data);
      if (response.status !== 201) {
        dispatch(setStatus(Status.ERROR));
        return;
      }
      console.log("registered ", data);
      dispatch(setStatus(Status.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function loginUser(data: IUserLoginData) {
  return async function loginUserThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("auth/login", data);
      if (response.status !== 200) {
        dispatch(setStatus(Status.ERROR));
        return;
      }
      dispatch(setStatus(Status.SUCCESS));
      localStorage.setItem("token", response.data.data.token);
    } catch (error) {
      console.log(error);
    }
  };
}
