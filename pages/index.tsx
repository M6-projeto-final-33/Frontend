import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <div style={{ display: "flex" }}>
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
