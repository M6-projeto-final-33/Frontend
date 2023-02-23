import styled from "styled-components";

export const OverWindow = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 0px;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 99;

  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 90%;
  max-height: 90%;
  padding: 10px;
  top: 50px;

  background: #ffffff;
  border-radius: 8px;

  gap: 5px;

  .modal.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    top: 0px;

    width: 100%;
    height: 56px;

    .title {
      font: var(--Heading-7-500);
    }

    .close {
      margin: 0;
      padding: 0;
      width: 5%;
      background: transparent;
      border: none;
    }

    .icon-close {
      color: var(--grey4);
      font-size: 2.5vh;

      :hover {
        transition: 0.5s all ease-in-out;
        color: #cd2b31;
      }
    }
  }

  .container {
    height: 40px;
    background: red;
  }

  @media screen and (min-width: 560px) {
    width: 520px;
  }
`;
