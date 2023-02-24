import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Button from "../components/Button";
import CarouselListing from "../components/CarouselListing";
import { advertisements } from "../database";
import CreateAnnouncement from "../components/CreateAnnouncement";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
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
      <main>
        <Landing id="landing_section" />
        <CarouselListing
          title="Leilão"
          id="leilao_section"
          auction
          adList={advertisements}
        />
        <CarouselListing
          title="Carros"
          id="carros_section"
          adList={advertisements}
        />
        <CarouselListing
          title="Motos"
          id="motos_section"
          adList={advertisements}
        />
        <Footer />
      </main>
    </>
  );
};

export default Home;
