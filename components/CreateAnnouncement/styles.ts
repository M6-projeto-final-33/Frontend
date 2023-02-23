import styled from "styled-components";

export const DefaultFormBackground = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
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

export const DefaultFormContent = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;

    span {
        font: var(--body-2-500);
        color: var(--alert1);
    }

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
        cursor: pointer;
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

    .input_box {
        margin-bottom: 24px;
    }

    .input_box_type2 {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .input_type2 {
        width: 48%;
    }

    .description_area {
        width: 100%;
        margin-bottom: 24px;

        font: var(--input-label);
        color: var(--grey1);

        textarea {
            width: 100%;
            max-width: 100%;
            min-width: 100%;
            height: 80px;

            margin-top: 8px;
            padding: 10px 16px;

            border: 1.5px solid #e9ecef;
            border-radius: 4px;

            font: var(--input-placeholder);
            color: var(--grey1);

            min-height: 45px;

            :focus {
            outline: none !important;
            border: 1px solid #5126ea;
            }

            :hover {
            transition: 0.5s all ease-in-out;
            background: #f1f3f5;
            }

            ::placeholder {
            font: var(--input-placeholder);
            color: var(--grey3);
            }
        }
    }

    .add_image_button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background-color: var(--brand4);
        border: none;
        border-radius: 4px;
        color: var(--brand1);
        font: var(--button-medium-text);

        @media (min-width: 580px) {
            max-width: 315px;
        }
    }

    .bottom_buttons {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 20px 0;

        @media (min-width: 580px) {
            margin-top: 50px;
            justify-content: end;
        }
    }

    .bottom_button {
        margin: 0;
        height: 48px;
        @media (min-width: 580px) {
            margin-left: 15px;
        }
    }
`
