import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CarouselListing from "../components/CarouselListing";
import { advertisements } from "../database";
import CreateAnnouncement from "../components/CreateAnnouncement";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

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
