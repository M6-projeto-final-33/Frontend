import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
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
      <h1>Motors Shop</h1>
    </div>
  );
};

export default Home;
