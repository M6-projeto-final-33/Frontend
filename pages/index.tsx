import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductCardAuction from "../components/ProductCardAuction";

const Home: NextPage = () => {

  const product = {
    title: "product",
    description: "description",
    imageUrl: "https://media.istockphoto.com/id/1133010686/pt/foto/toyota-corolla-sedan-in-hybrid-version-on-the-street.jpg?s=1024x1024&w=is&k=20&c=bXKpnBULet_xiF-c2OwdiPDnRjDMliUsJJNC9U6vYbc=",
    advertiser: "Antonio",
    advertiserUrl: "https://media.istockphoto.com/id/1133010686/pt/foto/toyota-corolla-sedan-in-hybrid-version-on-the-street.jpg?s=1024x1024&w=is&k=20&c=bXKpnBULet_xiF-c2OwdiPDnRjDMliUsJJNC9U6vYbc=",
    kilometers: "10",
    year: "2039",
    value: "88.000,00"
  }

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
      <ProductCardAuction product={product} />
      <ProductCard product={product} />
    </div>
  );
};

export default Home;
