import { ReactNode } from "react"
import { BoxComponentContainer } from "./styles"

interface IBoxComponentProps {
    children: ReactNode
}

const BoxComponent = ({ children }: IBoxComponentProps) => {
    return (
        <BoxComponentContainer>
            {children}
        </BoxComponentContainer>
    )
}

export default BoxComponent
