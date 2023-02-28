import { NextPage } from "next";
import DefaultPageComponent from "../components/DefaultPageComponent";
import { DefaultContainer } from "../components/DefaultPageComponent/styles";
import Navbar from "../components/Navbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormHandleSubmit } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../components/Input";
import BoxComponent from "../components/BoxComponent";
import Button from "../components/Button";

export interface IRequest {
  name: string
  password: string
}

const Login: NextPage = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
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
      <DefaultPageComponent maxWidth="411px">
        <BoxComponent>
          <form action="">
            <h1>Login</h1>
            <Input
              size="small"
              labelFor="Nome"
              fieldName="name"
              type="input"
              placeholder="Digitar usuário"
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

            <h3 className="right_h3">Esqueci minha senha</h3>

            <Button
              className="bottom_button"
              width_mobile="100%"
              width_desktop="100%"
              type="submit"
            >
              Entrar
            </Button>

            <h3 className="center_h3">Ainda não possui conta?</h3>

            <Button
              className="bottom_button"
              width_mobile="100%"
              width_desktop="100%"
              type="submit"
              colorStyle="transparent__grey-0"
            >
              Cadastrar
            </Button>

          </form>
        </BoxComponent>
      </DefaultPageComponent>
    </>
  );
};

export default Login;
