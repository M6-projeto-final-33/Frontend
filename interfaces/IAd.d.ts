import { IAd_POST } from "./IAd_POST";
import { IUser } from "./IUser";

export interface IAd extends Omit<IAd_POST, "userId"> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}
