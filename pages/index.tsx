import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CaroulselListing from "../components/CarouselListing";
import { advertisements } from "../database";

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
    <>
      <Head>
        <title>Motors Shop</title>
        <meta
          name="description"
          content="encontre seu veículo dos sonhos aqui"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <CaroulselListing title="Carros" adList={advertisements} />
      </main>
    </>
  );
};

export default Home;
