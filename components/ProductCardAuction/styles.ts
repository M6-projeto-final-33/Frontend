import Image from "next/image";
import styled from "styled-components";
import { DefaultCard } from "../DefaultCard/styles";

export const ProductCardAuctionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 328px;
  border-radius: 4px;
  background-image: url("../../assets/car1.png");
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 1000px) {
    width: 735px;

    :hover {
      .gradient_layer {
        background-image: linear-gradient(to bottom, #00000071, #000000);
      }
    }
  }
`;

export const Background = styled.figure`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 435px;
  background-color: var(--grey7);
  z-index: -2;
  overflow: hidden;

  .background_image {
    @media (min-width: 1000px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const GradientLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #00000029, #000000);
  z-index: -1;
`;

export const ProductCardAuctionDefaultContent = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductCardAuctionContainer1 = styled(
  ProductCardAuctionDefaultContent
)`
  height: 435px;

  @media (min-width: 1000px) {
    height: 326px;
  }
`;
export const ProductCardAuctionContent1 = styled(DefaultCard)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  .timer_container {
    display: flex;
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border-radius: 32px;
    background-color: var(--whiteFixed);
    font: var(--Heading-7-500);
  }

  .timer {
    margin-left: 16px;
  }

  .product_name {
    font: var(--Heading-6-600);
    color: var(--grey10);
  }

  .product_description {
    font: var(--body-1-400);
    color: var(--grey5);
  }

  @media (min-width: 1000px) {
    .product_down_info {
      align-items: center;
      flex-direction: row;
      height: auto;
    }
  }
`;

export const ProductCardAuctionContainer2 = styled(
  ProductCardAuctionDefaultContent
)`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: var(--brand1);
`;

export const ProductCardAuctionContent2 = styled(
  ProductCardAuctionDefaultContent
)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    font: var(--button-big-text);
    color: var(--whiteFixed);
  }
`;
