import { Container, OverWindow } from "./style";
import { RiCloseLine } from "react-icons/Ri";
import Button from "../Button";
import { Children, ReactNode, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

interface IProps {
  title?: string;
  children: ReactNode;
}

const Modal = ({ children, title }: IProps): JSX.Element => {
  const { modal, setModal } = useContext(ModalContext);

  return (
    <>
      {modal && (
        <OverWindow>
          <Container>
            <header className="modal header">
              <h3 className="modal title">{title}</h3>
              <Button className="modal close" onClick={() => setModal(false)}>
                <RiCloseLine className="modal icon-close" />
              </Button>
            </header>
            {children}
          </Container>
        </OverWindow>
      )}
    </>
  );
};

export default Modal;
