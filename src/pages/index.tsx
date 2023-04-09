import Head from "next/head";
import { Inter } from "next/font/google";
import Domain from "@/section/indexPage/domain";
import Footer from "@/section/common/footer";
import Hero from "@/section/indexPage/hero";
import ProjectType from "@/section/indexPage/projectType";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stub</title>
        <meta
          name="description"
          content="Create, launch and monetize any Web3 project in minutes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ProjectType />
      <Domain />
      <Footer />
    </>
  );
}
