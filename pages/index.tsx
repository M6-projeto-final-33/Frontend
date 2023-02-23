import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import Landing from "../components/Landing";
import ProductCard from "../components/ProductCard";
import ProductCardAuction from "../components/ProductCardAuction";

const Home: NextPage = () => {
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
      <Landing />
    </div>
  );
};

export default Home;
