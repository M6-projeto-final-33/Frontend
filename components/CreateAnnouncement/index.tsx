import { ModalContext } from "../../contexts/ModalContext";
import { FieldValues } from "react-hook-form/dist/types";
import { GrClose } from "react-icons/gr";
import api from "../../services/api";
import { useContext } from "react";
import Options from "../Options";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import {
  DefaultFormBackground,
  DefaultFormContainer,
  DefaultFormContent,
} from "./styles";

const CreateAnnouncement = () => {
  const { modal, setModal, register, handleSubmit, errors } =
    useContext(ModalContext);

  const [imagesURLs, setImagesURLs] = useState([""]);

  const addImage = () => {
    setImagesURLs([...imagesURLs, ""]);
  };

  const updateImage = (index: number, url: string) => {
    const newImages = [...imagesURLs];
    newImages[index] = url;
    setImagesURLs(newImages);
    console.log(imagesURLs);
  };

  const onSubmitFunction = (data: FieldValues) => {
    console.log(data);
    data.userId = "df03d8cc-9419-4a7e-a9ab-bac45ab3ffdf";

    api.post("/announcements/", data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      {modal && (
        <DefaultFormBackground>
          <DefaultFormContainer>
            <DefaultFormContent onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="top_container">
                <h2 className="form_title">Criar anuncio</h2>
                <GrClose
                  className="close_icon"
                  onClick={() => setModal(false)}
                />
              </div>

              <div className="input_box ib_0">
                <h2 className="input_title">Tipo de anuncio</h2>
                <Options
                  options={[
                    {
                      htmlFor: "Venda",
                      fieldValue: "sale",
                    },
                    {
                      htmlFor: "Leilão",
                      fieldValue: "auction",
                    },
                  ]}
                  fieldName="typeAd"
                  register={register}
                />
              </div>
              <span>{errors?.typeAd?.message}</span>

              <h3 className="vehicle_info">Informações do veículo</h3>

              <Input
                size="small"
                labelFor="Título"
                fieldName="title"
                type="input"
                placeholder="Digitar título"
                register={register}
              />
              <span>{errors?.title?.message}</span>

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
                  <span>{errors?.year?.message}</span>

                  <Input
                    className="input_type2"
                    size="small"
                    labelFor="Quilometragem"
                    fieldName="mileage"
                    type="input"
                    placeholder="0"
                    register={register}
                  />
                  <span>{errors?.mileage?.message}</span>
                </div>
                <Input
                  size="small"
                  labelFor="Preço"
                  fieldName="price"
                  type="input"
                  placeholder="50.000,00"
                  register={register}
                />
                <span>{errors?.price?.message}</span>
              </div>
              <label htmlFor="Descrição" className="description_area">
                Descrição
                <textarea
                  id="description"
                  placeholder="Digitar descrição"
                  {...register("description")}
                ></textarea>
              </label>
              <span>{errors?.description?.message}</span>

              <div className="input_box ib_0">
                <h2 className="input_title">Tipo de veículo</h2>
                <Options
                  options={[
                    {
                      htmlFor: "Carro",
                      fieldValue: "car",
                    },
                    {
                      htmlFor: "Moto",
                      fieldValue: "motorbike",
                    },
                  ]}
                  fieldName="vehicleType"
                  register={register}
                />
              </div>
              <span>{errors?.vehicleType?.message}</span>

              <Input
                className="big_text"
                size="small"
                labelFor="Imagem da capa"
                fieldName="coverImg"
                type="input"
                placeholder="Inserir URL da imagem"
                register={register}
              />
              <span>{errors?.coverImg?.message}</span>

              {imagesURLs.map((url, index) => {
                return (
                  <Input
                    key={index}
                    className="big_text"
                    size="small"
                    labelFor={index + 1 + "° Imagem da galeria"}
                    fieldName="urls"
                    type="input"
                    placeholder="https://image.com"
                    index={index}
                    handleChange={updateImage}
                  />
                );
              })}

              <button
                className="add_image_button"
                onClick={() => {
                  addImage();
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
                >
                  Cancelar
                </Button>
                <Button
                  className="bottom_button"
                  width_mobile="48%"
                  width_desktop="40%"
                  type="submit"
                >
                  Criar anúncio
                </Button>
              </div>
            </DefaultFormContent>
          </DefaultFormContainer>
        </DefaultFormBackground>
      )}
    </>
  );
};

export default CreateAnnouncement;
