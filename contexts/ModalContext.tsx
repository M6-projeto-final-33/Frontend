import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ContextsProps } from "../interfaces/ContextsProps";
import { IUser } from "../interfaces/IUser";

interface IModalContext {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: ContextsProps) => {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
