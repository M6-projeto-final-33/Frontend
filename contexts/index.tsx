import { ContextsProps } from "../interfaces/ContextsProps";
import ModalProvider from "./ModalContext";
import UserProvider from "./UserContext";

const Provider = ({ children }: ContextsProps) => (
  <UserProvider>
    <ModalProvider>{children}</ModalProvider>
  </UserProvider>
);
export default Provider;
