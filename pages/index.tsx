import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import CarouselListing from "../components/CarouselListing";
import { advertisements } from "../database";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import CreateAnnouncement from "../components/CreateAnnouncement";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { IAd } from "../interfaces/IAd";

const Home: NextPage = () => {

  const [auctions, setAuctions] = useState<IAd[]>([])
  const [cars, setCars] = useState<IAd[]>([])
  const [motorbikes, setMotorbikes] = useState<IAd[]>([])

  useEffect(() => {
    api.get("/announcements/auctions/")
      .then((res) => {
        setAuctions(res.data)
      })

    api.get("/announcements/cars/")
      .then((res) => {
        setCars(res.data)
      })

    api.get("/announcements/motorbikes/")
      .then((res) => {
        setMotorbikes(res.data)
      })
  }, [])

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
          adList={auctions}
        />
        <CarouselListing
          title="Carros"
          id="carros_section"
          adList={cars}
        />
        <CarouselListing
          title="Motos"
          id="motos_section"
          adList={motorbikes}
        />
        <Footer />
      </main>
    </>
  );
};

export default Home;
