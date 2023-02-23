import styled from "styled-components";

export const DefaultFormBackground = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 15px;
    background-color: rgb(0,0,0, 0.5);
    top: 0;
    z-index: 10;
`

export const DefaultFormContainer = styled.div`
    display: flex;
    width: 100%;
    width: 520px;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--whiteFixed);
`

export const DefaultFormContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    .top_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 55px;
    }

    .form_title {
        font: var(--Heading-7-500);
    }

    .close_icon {
        color: var(--grey4);
    }

    .input_box {

    }

    .input_title {
        font: var(--body-2-500);
    }

    .options_container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 18px;
    }

    .option {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48%;
        height: 48px;
        font: var(--button-big-text);
        border: 1px solid var(--grey4);
        border-radius: 4px;
        input { display: none; }
    }

    .option_selected {
        background-color: var(--brand1);
        border: none;
        color: var(--whiteFixed);
    }

    .vehicle_info {
        font: var(--body-2-500);
        margin: 20px 0;
    }
`
