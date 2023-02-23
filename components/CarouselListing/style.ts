import styled from "styled-components";

export const StyledCarousel = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;

  .title {
    font: var(--Heading-5-600);
    color: var(--grey0);
    margin-top: 200px;
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
