import Head from "next/head";
import Layout from "@/layout/Layout";
import About from "@/components/About/About";
import Clients from "@/components/Clients/Clients";
import Cta from "@/components/Cta/Cta";
import Expertise from "@/components/Expertise/Expertise";
import Intro from "@/components/Intro/Intro";
import Journal from "@/components/Journal/Journal";

export default function Index() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section id="content" className="s-content">
        <Intro />
        <About />
        <Expertise />
        <Clients />
      </section>
      <Cta />
      <Journal />
    </Layout>
  );
}
