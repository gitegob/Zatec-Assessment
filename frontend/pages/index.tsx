import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Houses } from "../components/Houses";
import { MainContent } from "../components/MainContent";
import { RightCol } from "../components/RightCol";
import { Subnav } from "../components/Subnav";

const Home: NextPage = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>Houses in GOT</title>
        <meta
          name="description"
          content="Search and find out more about houses in game of thrones"
        />
        <link rel="icon" href="/gotlogo.png" />
      </Head>
      <Header />
      <main className="flex justify-center">
        <MainContent>
          <Subnav />
          <div className="flex mt-2 justify-center">
            <RightCol>
              <Houses />
            </RightCol>
          </div>
        </MainContent>
      </main>
    </div>
  );
};

export interface IApiResponseProps {
  data?: any;
}
export default Home;
