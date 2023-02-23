import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Button from "../components/Button";

import Navbar from "../components/Navbar";
import { ModalContext } from "../contexts/ModalContext";

const Home: NextPage = () => {
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
    </>
  );
};

export default Home;
