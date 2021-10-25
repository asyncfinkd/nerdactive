import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import SubHeader from "ui/subHeader";
import IndexCard from "./components/index-card";

const Home: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.add("light");
    }
  });
  return (
    <>
      <Head>
        <title>Nerdactive — A blog by Nika Shamiladze</title>
      </Head>
      <div
        style={{
          color: "var(--textNormal)",
          backgroundColor: "var(--bg)",
          transition: "0.2s ease-out",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "42em",
            padding: "2.625rem 1.3125rem",
          }}
        >
          <Header />
          <SubHeader />
          <IndexCard />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
