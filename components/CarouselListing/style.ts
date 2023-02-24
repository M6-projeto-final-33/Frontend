import styled from "styled-components";

export const StyledCarousel = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 50px auto 0px auto;

  .title {
    font: var(--Heading-5-600);
    color: var(--grey0);
    margin-bottom: 15px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel {
      cursor: grab;
      overflow: hidden;

      .inner {
        display: flex;

        .item {
          min-height: 200px;
          min-width: 400px;
          padding: 14px;

          > div {
            width: 100%;
            height: 90%;
          }
        }
      }
    }
  }
`;

export const LinkPage = styled.div`
  height: 55px;

  @media (min-width: 425px) {
    height: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 40px;
  }
`;
