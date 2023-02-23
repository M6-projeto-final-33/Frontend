import Button from "../Button";
import { StyledFooter } from "./styles";
import Image from "next/image";

import logoFooter from "../../assets/titleFooter.png";

const Footer = () => {
  return (
    <StyledFooter>
      <Image src={logoFooter} alt="Logo Footer" />

      <strong>© 2022 - Todos os direitos reservados.</strong>

      <Button colorStyle="grey-1__grey-10">^</Button>
    </StyledFooter>
  );
};

export default Footer;
