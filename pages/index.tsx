import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portal Kecamatan I Kota Depok</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <LandingPageTemplate />
    </>
  );
};

export default Index;
