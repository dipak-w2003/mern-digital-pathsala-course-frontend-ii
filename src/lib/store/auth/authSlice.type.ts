import { Status } from "@/lib/types/type";

export interface IUserLoginData {
  email: string;
  password: string;
}
export interface IRegisterData extends IUserLoginData {
  userName: string;
}

export interface IInitialState {
  user: IUserLoginData;
  status: Status;
}
