import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInitialTeacherDataWithCourse,
  IInstituteTeacherInitialData,
  initialIInstituteTeacherInitialDataTeacherState,
} from "./instituteTeacherSlice.type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "@/lib/store/store";
import { API } from "@/lib/http";
const instituteTeacherSlice = createSlice({
  name: "instituteTeacherSlice",
  initialState: initialIInstituteTeacherInitialDataTeacherState,
  reducers: {
    setTeacher(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<IInitialTeacherDataWithCourse>
    ) {
      state.teacher = action.payload;
    },
    setStatus(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },
  },
});
export const { setTeacher, setStatus } = instituteTeacherSlice.actions;
export default instituteTeacherSlice.reducer;

// Thunks

export function createInstituteTeacher(data: IInitialTeacherDataWithCourse) {
  return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("institute/teacher", data);
      if (response.status !== 201 && response.data.data.length! > 0)
        return dispatch(setStatus(Status.ERROR));
      dispatch(setStatus(Status.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
export function deleteInstituteTeacher(id: string | number) {
  return async function deleteInstituteTeacherThunk(dispatch: AppDispatch) {
    try {
      const response = await API.delete(`institute/teacher/${id}`);
      if (response.status !== 201) return dispatch(setStatus(Status.ERROR));
      dispatch(setStatus(Status.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
