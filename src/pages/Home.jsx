import React from "react";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";
export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}
