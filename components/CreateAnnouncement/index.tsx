import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { GrClose } from "react-icons/gr"
import { DefaultFormBackground, DefaultFormContainer, DefaultFormContent } from './styles'
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
        <DefaultFormBackground>
            <DefaultFormContainer>
                <DefaultFormContent>
                    <div className="top_container">
                        <h2 className="form_title">Criar anuncio</h2>
                        <GrClose className="close_icon" />
                    </div>
                    <div className="input_box ib_0">
                        <h2 className="input_title">Tipo de anuncio</h2>
                        <div className="options_container">
                            <label className="option option_selected" htmlFor="venda">
                                Venda
                                <input id="venda" type="radio" name="type_ad" />
                            </label>
                            <label className="option" htmlFor="leilao">
                                Leilão
                                <input id="leilao" type="radio" name="type_ad" />
                            </label>
                        </div>
                    </div>
                    <h3 className="vehicle_info">Informações do veículo</h3>
                    <Input size="small" labelFor="Título" type="input" placeholder="Digitar título" register={register} />
                </DefaultFormContent>
            </DefaultFormContainer>
        </DefaultFormBackground>
    )
}

export default CreateAnnouncement
