import styled from "styled-components";

export const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 100%;
  height: 60vh;
  min-height: 450px;

  background-color: var(--brand1);

  .box.description {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    width: 100%;
    height: 80%;

    gap: 30px;

    .description {
      color: var(--grey10);
      max-width: 748px;
    }

    .main {
      font: var(--Heading-3-600);
    }

    .sub {
      font: var(--body-1-400);
    }
    .box.select {
      display: flex;
      flex-direction: column;

      gap: 25px;

      .select {
        width: 90vw;
        margin-left: 0;
        border: 0.5px solid #fff;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .box.description {
      .main {
        font: var(--Heading-1-700);
      }
      .sub {
        font: var(--body-1-400);
      }
      .box.select {
        display: flex;
        flex-direction: row;
        .select {
          width: 15vw;
        }
      }
    }
  }
`;
