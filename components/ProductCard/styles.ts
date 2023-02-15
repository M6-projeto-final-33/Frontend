import styled from "styled-components";

export const ProductCardContainer = styled.div`
    display: flex;
    padding: 15px;
    width: 350px;
`

export const ProductCardContent = styled.div`
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

    h2 {
        font: var(--Heading-7-600);
        color: var(--grey1);
        margin-bottom: 16px;
    }

    h3 {
        font: var(--body-2-400);
        color: var(--grey2);
        margin-bottom: 16px;
    }

    .product_description {
        max-height: 50px;
        max-width: 100%;
    }

    .product_image {
        width: 100%;
        height: auto;
    }

    .product_advertiser {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    .advertiser_figure {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
    }

    .advertiser_profile {
        width: 100%;
        height: auto;
    }

    .advertiser_name {
        font: var(--body-2-500);
        color: var(--grey2);
        margin-left: 8px;
    }

    .product_down_info {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .product_numbers {
        display: flex;
    }

    .product_button {
        padding: 4px 8px;
        border-radius: 4px;
        background-color: var(--brand4);
        font: var(--body-2-500);
        color: var(--brand1);
        margin-right: 12px;
    }

    .product_value {
        font: var(--Heading-7-500);
        color: var(--grey1);
    }
`
