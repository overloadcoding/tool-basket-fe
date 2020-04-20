import { NextPage } from "next";
import Head from "next/head";
import siteInfo from "../siteInfo.json";

import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteInfo.metas["index"].title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
};

export default Home;
