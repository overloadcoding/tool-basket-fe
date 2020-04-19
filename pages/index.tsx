import { NextPage } from "next";
import Head from "next/head";

import "../styles/index.css";
import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home - JWY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main mt-24">
        <div className="wave"></div>
      </main>
    </Layout>
  );
};

export default Home;
