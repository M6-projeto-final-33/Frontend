import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Icon, StyledUserIcon } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import Image from "next/image";
import getUserInitials from "../../utils/getUserInitials";
import transformUserName from "../../utils/transformUserName";
import { IUser } from "../../interfaces/IUser";

interface IUserIcon {
  user?: IUser;
  isNav?: boolean;
}

const UserIcon = ({ user, isNav }: IUserIcon) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const renderConditional = () => {
    if (user) {
      if (user.userImage) {
        return <Image alt="user image" src={user.userImage} />;
      } else {
        return <Icon onClick={toggleMenu}>{getUserInitials(user.name)}</Icon>;
      }
    } else {
      return (
        <Icon onClick={toggleMenu}>{getUserInitials("nome usuário")}</Icon>
      );
    }
  };
  return (
    <>
      <StyledUserIcon>
        {renderConditional()}
        <span onClick={toggleMenu}>
          {user
            ? transformUserName(user.name)
            : transformUserName("nome usuário")}
        </span>
      </StyledUserIcon>
      {isNav && (
        <motion.ul
          className="user-dropDown"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <li>Editar perfil</li>
          <li>Editar endereço</li>
          <li>Minhas compras</li>
          <li>Sair</li>
        </motion.ul>
      )}
    </>
  );
};

export default UserIcon;
