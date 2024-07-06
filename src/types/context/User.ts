import { IUser } from "../base";

export interface IUserContextProps {
  user: IUser | null;
  handleLogout: () => void;
}
