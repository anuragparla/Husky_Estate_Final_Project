import React from "react";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import "../main.css";

const HomePage = () => {
  return (
    <>
      <div className="homecontainer">
        <Navbar />
        <Hero />
        <Service />
        <Footer />
        
      </div>
    </>
  );
};

export default HomePage;
