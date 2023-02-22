import Link from "next/link";
import { INavbar } from ".";
import { DropDownMenu, StyledDesktopNav, StyledNav } from "./style";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import UserIcon from "../UserIcon";
import Button from "../Button";

const DesktopNavbar = ({ isAuthenticated }: INavbar) => {
  return (
    <StyledNav>
      <StyledDesktopNav>
        <Link href="/">
          <Image alt="brand logo" src={Logo} />
        </Link>
        <div className="navbar">
          <div className="pages">
            <Link href="/carros">Carros</Link>
            <Link href="/motos">Motos</Link>
            <Link href="/leilao">Leilão</Link>
          </div>
          {isAuthenticated ? (
            <DropDownMenu>
              <UserIcon />
            </DropDownMenu>
          ) : (
            <div className="login-signin">
              <Link href="/login">Fazer login</Link>
              <Link href="/sign-in">
                <Button width_mobile="90%" colorStyle="grey-4__grey-0">
                  Cadastrar
                </Button>
              </Link>
            </div>
          )}
        </div>
      </StyledDesktopNav>
    </StyledNav>
  );
};

export default DesktopNavbar;
