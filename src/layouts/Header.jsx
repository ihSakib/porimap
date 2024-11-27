import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-gray-100  p-3 md:p-4">
      <img src={logo} alt="logo" className="h-8 md:h-10 mr-3" />
      <h1 className="text-lg leading-none md:text-xl lg:text-2xl font-bold text-gray-800">
        ভূমি পরিমাপ
      </h1>
    </header>
  );
}
