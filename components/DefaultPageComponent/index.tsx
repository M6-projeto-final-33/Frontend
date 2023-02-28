import { ReactNode } from "react"
import { DefaultContainer, DefaultContent } from "./styles"

interface IDefaultPageComponent {
    children: ReactNode,
    maxWidth?: string
}

const DefaultPageComponent = ({ children, maxWidth }: IDefaultPageComponent) => {
    return (
        <DefaultContainer>
            <DefaultContent maxWidth={maxWidth}>
                {children}
            </DefaultContent>
        </DefaultContainer>
    )
}

export default DefaultPageComponent
