import { ReactNode } from "react";

import Button from "../Button";

import { StyledModal } from "./style";

interface IModal {
  children: ReactNode;
  titleModal: string;
  isDoubleButton?: boolean;
  contentButtonOne: string;
  contentButtonTwo?: string;
  setModalIsOpen: (data: boolean) => void;
}

const Modal = ({
  children,
  titleModal,
  isDoubleButton,
  contentButtonOne,
  contentButtonTwo,
  setModalIsOpen,
}: IModal) => {
  

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <StyledModal>
      <div className="div_header">
        <h1>{titleModal}</h1>

        <button onClick={closeModal}>X</button>
      </div>

      {children}

      <div className="div_buttons">
        {isDoubleButton && (
          <Button colorStyle="grey-6__grey-2">{contentButtonTwo}</Button>
        )}
        <Button colorStyle="brand-1__white-fixed"> {contentButtonOne} </Button>
      </div>
    </StyledModal>
  );
};

export default Modal;
