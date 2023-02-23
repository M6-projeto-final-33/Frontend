import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { GrClose } from "react-icons/gr"
import { DefaultFormBackground, DefaultFormContainer, DefaultFormContent } from './styles'
import Input from '../Input'
import { useState } from 'react'
import Button from '../Button'

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

    const [imagesURLs, setImagesURLs] = useState([""])

    const addImage = () => {
        setImagesURLs([...imagesURLs, ""])
    }

    const updateImage = (index: number, url: string) => {
        const newImages = [...imagesURLs]
        newImages[index] = url
        setImagesURLs(newImages)
        console.log(imagesURLs)
    }

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
                <DefaultFormContent onSubmit={handleSubmit(onSubmitFunction)}>

                    <div className="top_container">
                        <h2 className="form_title">Criar anuncio</h2>
                        <GrClose className="close_icon" />
                    </div>

                    <div className="input_box ib_0">
                        <h2 className="input_title">Tipo de anuncio</h2>
                        <div className="options_container">
                            <label className="option option_selected" htmlFor="venda">
                                Venda
                                <input
                                    id="venda"
                                    type="radio"
                                    name="type_ad"
                                    value="sale"
                                    {...register?.("typeAd")}
                                />
                            </label>
                            <label className="option" htmlFor="leilao">
                                Leilão
                                <input
                                    id="leilao"
                                    type="radio"
                                    name="type_ad"
                                    value="auction"
                                    {...register?.("typeAd")}
                                />
                            </label>
                        </div>
                    </div>
                    <span>{errors.typeAd?.message}</span>

                    <h3 className="vehicle_info">Informações do veículo</h3>

                    <Input
                        size="small"
                        labelFor="Título"
                        fieldName="title"
                        type="input"
                        placeholder="Digitar título"
                        register={register}
                    />
                    <span>{errors.title?.message}</span>

                    <div className="input_box input_box_type1">
                        <div className="input-box input_box_type2">
                            <Input
                                className="input_type2"
                                size="small"
                                labelFor="Ano"
                                fieldName="year"
                                type="input"
                                placeholder="2018"
                                register={register}
                            />
                            <span>{errors.year?.message}</span>

                            <Input
                                className="input_type2"
                                size="small"
                                labelFor="Quilometragem"
                                fieldName="mileage"
                                type="input"
                                placeholder="0"
                                register={register}
                            />
                            <span>{errors.mileage?.message}</span>
                        </div>
                        <Input
                            size="small"
                            labelFor="Preço"
                            fieldName="price"
                            type="input"
                            placeholder="50.000,00"
                            register={register}
                        />
                        <span>{errors.price?.message}</span>
                    </div>

                    <Input
                        className="big_text"
                        size="big"
                        labelFor="Descrição"
                        fieldName="description"
                        type="input"
                        placeholder="Digitar descrição"
                        register={register}
                    />
                    <span>{errors.description?.message}</span>

                    <div className="input_box ib_0">
                        <h2 className="input_title">Tipo de veículo</h2>
                        <div className="options_container">
                            <label className="option option_selected" htmlFor="car">
                                Carro
                                <input
                                    id="car"
                                    type="radio"
                                    name="type_ad"
                                    value="car"
                                    {...register?.("vehicleType")}
                                />
                            </label>
                            <label className="option" htmlFor="moto">
                                Moto
                                <input
                                    id="moto"
                                    type="radio"
                                    name="type_ad"
                                    value="motocycle"
                                    {...register?.("vehicleType")}
                                />
                            </label>
                        </div>
                    </div>
                    <span>{errors.vehicleType?.message}</span>

                    <Input
                        className="big_text"
                        size="small"
                        labelFor="Imagem da capa"
                        fieldName="coverImg"
                        type="input"
                        placeholder="Inserir URL da imagem"
                        register={register}
                    />
                    <span>{errors.coverImg?.message}</span>

                    {imagesURLs.map((url, index) => {
                        return (
                            <Input
                                key={index}
                                className="big_text"
                                size="small"
                                labelFor={(index + 1) + "° Imagem da galeria"}
                                fieldName="urls"
                                type="input"
                                placeholder="https://image.com"
                                index={index}
                                handleChange={updateImage}
                            />
                        )
                    })}

                    <button
                        className="add_image_button"
                        onClick={() => {
                            addImage()
                        }}
                    >
                        Adicionar campo para imagem da galeria
                    </button>

                    <div className="bottom_buttons">
                        <Button
                            className="bottom_button"
                            width_mobile="48%"
                            width_desktop="30%"
                            colorStyle="grey-6__grey-2"
                        >Cancelar</Button>
                        <Button
                            className="bottom_button"
                            width_mobile="48%"
                            width_desktop="40%"
                            type="submit"
                        >Criar anúncio</Button>
                    </div>

                </DefaultFormContent>
            </DefaultFormContainer>
        </DefaultFormBackground>
    )
}

export default CreateAnnouncement
