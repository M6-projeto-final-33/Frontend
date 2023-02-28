import styled from "styled-components";

interface IDefaulContent {
    maxWidth: string
}

export const DefaultContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 100%;
    min-height: 100vh;
    padding: 20px;
    margin-top: 80px;
    background-color: var(--grey8);
`

export const DefaultContent = styled.div<IDefaulContent>`
    width: 100%;
    max-width: ${(props) => props.maxWidth || "1000px"};
`
