import { NextPage } from "next";
import Head from "next/head";
import HomePage from "../templates/HomePage/HomePageTemp";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <HomePage />
    </>
  );
};

export default Index;
