import styled from "styled-components";

export const DefaultFormContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0,0,0, 0.5);
    top: 0;
    z-index: 10;
`

export const DefaultFormContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 520px;
    padding: 24px 18px;
    border-radius: 8px;
    background-color: var(--whiteFixed);
`
