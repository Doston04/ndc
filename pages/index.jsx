import Head from "next/head";
import Layout from "../components/Layout/Layout";
import CasesSection from "../components/Sections/CasesSection/CasesSection";
import HeroSection from "../components/Sections/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NDC</title>
        <meta name="description" content="NDC" />
        <meta name="color-scheme" content="dark light" />
        <link
          rel="icon"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
          href="/favicon-dark.svg"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
          href="/favicon-light.svg"
        />
      </Head>
      <Layout>
        <HeroSection />
        <CasesSection />
      </Layout>
    </>
  );
}
