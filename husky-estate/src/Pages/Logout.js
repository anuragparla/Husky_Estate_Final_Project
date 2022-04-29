import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import "../main.css";
import Navbar3 from "../Components/Navbar";
import Cookies from "universal-cookie";

const LogoutPage = () => {
  let navigate = useNavigate();
    useEffect(() => {
        new Cookies().remove("auth");
        navigate("/", {replace: true})
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
