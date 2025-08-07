// collect all slices and store

import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import instituteSlice from "./institute/instituteSlice";
import instituteCourseSlice from "./institute/course/courseSlice";
import instituteTeacherSlice from "./institute/teacher/instituteTeacherSlice";
import categorySlice from './institute/category/categorySlice'
const store = configureStore({
  reducer: {
    auth: authSlice,
    institute: instituteSlice,
    course: instituteCourseSlice,
    teacher: instituteTeacherSlice,
    category: categorySlice
  },

});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; 
