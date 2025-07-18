import { Status } from "@/lib/types/type";

export interface IInstituteCourseInitialDataCourse {
  courseName: string;
  coursePrice: string;
  id: string;
}

export interface IInstituteCourseInitialData {
  status: Status;
  courses: IInstituteCourseInitialDataCourse[];
}
export const initialCourseState: IInstituteCourseInitialData = {
  courses: [
    {
      courseName: "Node JS",
      coursePrice: "999",
      id: "1",
    },
  ],
  status: Status.LOADING,
};
