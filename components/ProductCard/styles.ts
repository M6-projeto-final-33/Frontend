import styled from "styled-components";
import { DefaultCard } from "../DefaultCard/styles";

export const ProductCardContainer = styled.div`
    display: flex;
    padding: 15px;
    width: 350px;
`

export const ProductCardContent = styled(DefaultCard)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    figure {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        background-color: var(--grey7);
        margin-bottom: 16px;
        overflow: hidden;
    }

    .product_image_container {
        border: 2px solid var(--whiteFixed);
    }

    .product_image_container:hover {
        border: 2px solid var(--brand2);
    }

    .product_title {
        font: var(--Heading-7-600);
        color: var(--grey1);
        margin-bottom: 16px;
    }

    .product_description {
        font: var(--body-2-400);
        color: var(--grey2);
        margin-bottom: 16px;
        max-height: 50px;
        max-width: 100%;
    }

    .product_image {
        width: 100%;
        height: auto;
    }

    .advertiser_figure {
        margin: 0;
    }

    .advertiser_profile {
        width: 100%;
        height: auto;
    }

    .advertiser_name {
        color: var(--grey2);
    }

    .product_down_info {
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .product_numbers {
        display: flex;
    }

    .product_value {
        color: var(--grey1);
    }
`
