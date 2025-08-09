import { Status } from "@/lib/types/type";

export enum TeacherExpertise {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Pro = "pro",
}

interface IInstituteTeacherInitialDataTeacherCourse {
  courseName: string;
  coursePrice: string;
  courseThumbnail: string;
}
export interface IInstituteTeacherInitialDataTeacher {
  teacherName: string | null;
  teacherEmail: string | null;
  teacherPhoneNumber: string;
  teacherExpertise: TeacherExpertise;
  teacherSalary: string;
  joinedDate: string;
  teacherPhoto: string;
}

export interface IInitialTeacherDataWithCourse
  extends IInstituteTeacherInitialDataTeacher {
  course?: IInstituteTeacherInitialDataTeacherCourse;
}

export interface IInstituteTeacherInitialData {
  teachers: IInstituteTeacherInitialDataTeacher[];
  status: Status;
}
export const iInstituteTeachersInitialData: IInstituteTeacherInitialData = {
  teachers: [],
  status: Status.LOADING
}
