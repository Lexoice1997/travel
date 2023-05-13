import Header from "@/components/Header";
import Main from "@/components/Main";
import Order from "@/components/Order";
import Popular from "@/components/Popular";
import About from "@/components/About";
import Recently from "@/components/Recently";
import Service from "@/components/Service";
import Beat from "@/components/Beat";
import Footer from "@/components/Footer";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";


export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="m-auto px-4 xl:max-w-[1440px] lg:max-w-[1280px]">
        <Header />
        <Main />
        <Order />
        <Popular />
        <About />
        <Recently />
        <Service />
        <Beat />
        <Footer />
      </div>
    </main>
  );
}
