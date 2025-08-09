import { Status } from "@/lib/types/type";

interface IInstituteCourseInitialDataCourse {
  courseName: string,
  coursePrice: string,
  courseDescription:string,
  createdAt:Date,
  id: string
}

export interface IInstituteCourseInitialData {
  status: Status,
  courses: IInstituteCourseInitialDataCourse[]
}


export interface ICoursePostData {
  courseName: string,
  courseDescription: string,
  coursePrice: string,
  courseDuration: string,
  courseThumbnail: File | null,
  categoryId: string,
  courseLevel: string
}


