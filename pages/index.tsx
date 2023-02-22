import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import ProductCard from "../components/ProductCard";
import ProductCardAuction from "../components/ProductCardAuction";

export interface ISubmitData {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<ISubmitData>({});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>Motors Shop</title>
        <meta
          name="description"
          content="encontre seu veículo dos sonhos aqui"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size={"big"}
          labelFor={"Email"}
          placeholder={"Email"}
          type={"text"}
          register={register}
        />
      </form>
    </div>
  );
};

export default Home;
