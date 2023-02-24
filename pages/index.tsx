import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Button from "../components/Button";
import CreateAnnouncement from "../components/CreateAnnouncement";
import Modal from "../components/Modal";

import Navbar from "../components/Navbar";
import { ModalContext } from "../contexts/ModalContext";

const Home: NextPage = () => {
  const { setModal } = useContext(ModalContext);

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
      <Modal title="Editar perfil" />
      <Navbar />
      <Button>test</Button>
      <Button
        onClick={() => {
          setModal(true);
        }}
      >
        test
      </Button>
    </>
  );
};

export default Home;
