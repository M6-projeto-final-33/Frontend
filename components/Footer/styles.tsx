import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: calc(310px - 20vw);
  min-height: 140px;
  min-width: max-content;

  background-color: var(--grey0);

  padding: 0px 30px;

  strong {
    display: flex;

    font: var(--body-2-400);

    color: var(--whiteFixed);
  }

  Button {
    width: 53px;
    height: 50px;
  }

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;
