import React from "react";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";
import bg from "../bg.jpg";
export default function Home() {
  const customStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Ensures the image covers the entire section
    backgroundPosition: "top", // Centers the image
  };
  return (
    <div className="min-h-dvh flex flex-col " style={customStyle}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
