import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>NDC</title>
        <meta name="description" content="NDC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p>Main</p>
      </Layout>
    </>
  );
}
