import React, { useState } from "react";
import FooterInfo from "./FooterInfo";
import { MainFooterLinks } from "../data";
import "../main.css";

const Footer = () => {
  const [footer, setFooter] = useState(MainFooterLinks);
  return (
    <div className="footer">
      <FooterInfo />
    </div>
  );
};

export default Footer;
