import React from "react";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";

import "../main.css";
import Navbar3 from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar3 />
        <Hero />
        <Service />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
