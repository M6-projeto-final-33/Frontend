import styled from "styled-components";

export const DefaultCard = styled.div`
    .product_advertiser {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    .advertiser_figure {
        display: flex;
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
        color: var(--whiteFixed);
        margin-left: 8px;
    }

    .product_down_info {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 20%;
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
        color: var(--whiteFixed);
    }
`
