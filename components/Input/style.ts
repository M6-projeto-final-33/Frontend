import styled from "styled-components";

interface IProps {
  size: "small" | "big";
}

export const Label = styled.label<IProps>`
  width: 90%;

  margin: 0 auto;

  input {
    width: 100%;
    height: 100%;

    margin-top: 3px;
    margin-left: 1px;
    padding: 0px 16px;

    border: 1.5px solid #e9ecef;
    border-radius: 4px;

    min-height: ${({ size }) =>
      size === "small"
        ? `
       45px 
       `
        : `
       90px
       `};

    :focus {
      outline: none !important;
      border: 1px solid #5126ea;
    }
    :hover {
      transition: 0.5s all ease-in-out;
      background: #f1f3f5;
    }
  }
`;
