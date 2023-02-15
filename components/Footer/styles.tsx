import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 140px;

  background-color: var(--grey0);

  padding: 0px 60px;

  strong {
    display: flex;

    font-size: var(--body-2-400);

    color: var(--whiteFixed);
  }

  Button {
    width: 53px;
    height: 50px;
  }
`;
