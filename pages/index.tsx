import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Button from "../components/Button";



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
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </main>
    </>
  );
};

export default Home;
