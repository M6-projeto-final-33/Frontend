import { ContextsProps } from "../interfaces/ContextsProps";
import { UserProvider } from "./UserContext";

const Provider = ({ children }: ContextsProps) => (
  <UserProvider>{children}</UserProvider>
);
export default Provider;
