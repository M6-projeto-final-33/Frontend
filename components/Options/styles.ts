import styled from "styled-components";

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 18px;

    label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48%;
        height: 48px;
        font: var(--button-big-text);
        border: 1px solid var(--grey4);
        border-radius: 4px;
        input { display: none; }
        cursor: pointer;
    }

    .option_selected {
        background-color: var(--brand1);
        border: none;
        color: var(--whiteFixed);
    }
`


