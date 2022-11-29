export interface IUser {
  email?: string;
  userName: string;
  token: string;
  nationalCode?: string;
  displayName: string;
}
export type Login = {
  phoneNumber: string;
  password: string;
};
export type Register = {
  phoneNumber: string;
  password: string;
  displayName: string;
};
