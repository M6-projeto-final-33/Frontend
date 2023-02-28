import { NextPage } from "next";
import BoxComponent from "../components/BoxComponent";
import DefaultPageComponent from "../components/DefaultPageComponent";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormHandleSubmit } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Options from "../components/Options";
import Button from "../components/Button";

export interface IRequest {
  name: string;
  email: string;
  cpf: string;
  contact: string;
  birthDate: string;
  description: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  userType: "buyer" | "advertiser";
  password: string;
}

const SignIn: NextPage = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigratório"),
    email: yup.string().email().required("E-mail obrigratório"),
    cpf: yup.string().required("CPF obrigratório"),
    contact: yup.string().required("Celular obrigratório"),
    birthDate: yup.string().required("Data de nascimento obrigratória"),
    description: yup.string().required("Descrição obrigratória"),
    cep: yup.string().required("CEP obrigratório"),
    state: yup.string().required("Estado obrigratório"),
    city: yup.string().required("Cidade obrigratória"),
    street: yup.string().required("Rua obrigratória"),
    number: yup.number().required("Número obrigratório"),
    complement: yup.string(),
    userType: yup.string().required("Tipo de conta obrigratória"),
    password: yup.string().required("Senha obrigratória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequest>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Navbar />

      <DefaultPageComponent>
        <BoxComponent>
          <form action="submit">
            <h1>Cadastro</h1>
            <h2>Informações pessoais</h2>

            <Input
              className="input_container"
              size="small"
              labelFor="Nome"
              fieldName="name"
              type="input"
              placeholder="Ex: Samuel Leão"
              register={register}
            />

            <Input
              size="small"
              labelFor="email"
              fieldName="email"
              type="input"
              placeholder="Ex: samuel@kenzie.com.br"
              register={register}
            />

            <Input
              size="small"
              labelFor="CPF"
              fieldName="cpf"
              type="input"
              placeholder="000.000.000-00"
              register={register}
            />

            <Input
              size="small"
              labelFor="Celular"
              fieldName="contact"
              type="input"
              placeholder="(DDD) 90000-0000"
              register={register}
            />

            <Input
              size="small"
              labelFor="Data de nascimento"
              fieldName="birthDate"
              type="input"
              placeholder="30/12/2000"
              register={register}
            />

            <label htmlFor="Descrição" className="description_area">
              Descrição
              <textarea
                id="description"
                placeholder="Digitar descrição"
                {...register("description")}
              ></textarea>
            </label>

            <h2>Informações de endereço</h2>

            <Input
              size="small"
              labelFor="CEP"
              fieldName="cep"
              type="input"
              placeholder="00000.000"
              register={register}
            />

            <Input
              size="small"
              labelFor="Estado"
              fieldName="state"
              type="input"
              placeholder="Digitar estado"
              register={register}
            />

            <Input
              size="small"
              labelFor="Cidade"
              fieldName="city"
              type="input"
              placeholder="Digitar cidade"
              register={register}
            />

            <Input
              size="small"
              labelFor="Rua"
              fieldName="street"
              type="input"
              placeholder="Digitar rua"
              register={register}
            />

            <Input
              size="small"
              labelFor="Número"
              fieldName="number"
              type="input"
              placeholder="Digitar número"
              register={register}
            />

            <Input
              size="small"
              labelFor="Complemento"
              fieldName="complement"
              type="input"
              placeholder="Ex: apart 307"
              register={register}
            />

            <Options
              options={[
                {
                  htmlFor: "Comprador",
                  fieldValue: "seller",
                },
                {
                  htmlFor: "Anunciante",
                  fieldValue: "advertiser",
                },
              ]}
              fieldName="userType"
              register={register}
            />

            <Input
              size="small"
              labelFor="Senha"
              fieldName="password"
              type="input"
              placeholder="Digitar senha"
              register={register}
            />

            <Input
              size="small"
              labelFor="Confirmar Senha"
              fieldName="password"
              type="input"
              placeholder="Digitar senha"
              register={register}
            />

            <Button
              className="bottom_button"
              width_mobile="100%"
              width_desktop="100%"
              type="submit"
            >
              Finalizar cadastro
            </Button>

          </form>
        </BoxComponent>
      </DefaultPageComponent>

    </>
  );
};

export default SignIn;
