import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ContextsProps } from "../interfaces/ContextsProps";
import { IUser } from "../interfaces/IUser";

interface IUserContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;

  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: ContextsProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
