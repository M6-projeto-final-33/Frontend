import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { DefaultFormContainer, DefaultFormContent } from './styles'
import Input from '../Input'

export interface IRequest {
    typeAd: string
    title: string
    year: string
    mileage: string
    price: number
    description: string
    vehicleType: "Carro" | "Moto"
    coverImg: string
}

const CreateAnnouncement = () => {

    const formSchema = yup.object().shape({
        typeAd: yup.string().required("Tipo obrigratório"),
        title: yup.string().required("Título obrigatório"),
        year: yup.string().required("Ano obrigatório"),
        mileage: yup.string().required("Kilometragem obrigatória"),
        price: yup.string().required("Preço obrigatório"),
        description: yup.string().required("Descrição obrigatória"),
        vehicleType: yup.string().required("Tipo do veículo obrigatório"),
        coverImg: yup.string().required("Url da imagem obrigatória"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRequest>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <DefaultFormContainer>
            <DefaultFormContent>
                <Input size="small" labelFor="Tipo de anuncio" type="input" placeholder="Tipo" register={register} />
                <Input size="small" labelFor="Tipo de anuncio" type="input" placeholder="Tipo" register={register} />
            </DefaultFormContent>
        </DefaultFormContainer>
    )
}

export default CreateAnnouncement
