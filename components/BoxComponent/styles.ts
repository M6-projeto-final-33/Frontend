import styled from "styled-components";

export const BoxComponentContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 44px 28px;
    background-color: var(--whiteFixed);
    border-radius: 4px;

    h1 {
        font: var(--Heading-5-500);
        margin-bottom: 32px;
    }

    h2 {
        font: var(--body-2-500);
        margin-bottom: 24px;
    }

    input {
    }

    h3 {
        display: flex;
        width: 100%;
        font: var(--body-2-500);
        color: var(--grey2)
    }

    .right_h3 {
        justify-content: end;
    }

    .center_h3 {
        justify-content: center;
        margin: 24px 0;
    }

    .description_area {
        width: 100%;

        font: var(--input-label);
        color: var(--grey1);

        textarea {
            width: 100%;
            max-width: 100%;
            min-width: 100%;
            height: 80px;

            margin-top: 8px;
            margin-bottom: 24px;
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

    .options {
        margin-bottom: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

    }
`
