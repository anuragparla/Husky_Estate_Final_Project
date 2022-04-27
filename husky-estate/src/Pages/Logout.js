import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";

import "../main.css";
import Navbar3 from "../Components/Navbar";
import Cookies from "universal-cookie";

const LogoutPage = () => {
    useEffect(() => {
        new Cookies().remove("auth");
        window.open("/", "_self").focus();
    }, [])
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

export default LogoutPage;
