import styled from "styled-components";

export const Label = styled.label`
  width: 90%;
  height: 45px;

  margin: 0 auto;

  input {
    width: 100%;
    height: 100%;

    margin-top: 3px;
    margin-left: 1px;
    padding: 0px 16px;

    border: 1.5px solid #e9ecef;
    border-radius: 4px;

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
