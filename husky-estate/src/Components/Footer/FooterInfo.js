import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { SocialMediaLinks } from "../../data";

const FooterInfo = () => {
  return (
    <div className="footer-essays">
      <p className="first-message">
        Zillow Group is committed to ensuring digital accessibility for
        individuals with disabilities. We are continuously working to improve
        the accessibility of our web experience for everyone, and we welcome
        feedback and accommodation requests. If you wish to report an issue or
        seek an accommodation.
      </p>
      <br></br>
      <div className="second-message-container">
        <p className="second-message">
          Zillow, Inc. holds real estate brokerage licenses in multiple states.
          Zillow (Canada), Inc. holds real estate brokerage licenses in multiple
          provinces. A list of our real estate licenses is available.
          <br></br>
          TREC: Information about brokerage services, Consumer protection notice
        </p>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.57rem",
            color: "#54545a",
            margin: "0",
          }}
        >
          California DRE #1522444
        </p>
      </div>
      <a href="/" className="contact-link">
        Contact Zillow, Inc. Brokerage
      </a>
      <br></br>
      <p className="third-message">
        For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
        REALTOR® logo are controlled by The Canadian Real Estate Association
        (CREA) and identify real estate professionals who are members of CREA.
        The trademarks MLS®, Multiple Listing Service® and the associated logos
        are owned by CREA and identify the quality of services provided by real
        estate professionals who are members of CREA. Used under license.
      </p>
      <span className="logo-2">
        <img
          style={{
            alignSelf: "center",
            height: "2.2rem",
            marginBottom: "1rem",
          }}
          src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
          alt="zillow logo"
        />
      </span>
      <div className="social-area">
        <i>Follow us:</i>
        {SocialMediaLinks.map((social) => {
          const { id, socialSymbol } = social;
          return (
            <div key={id} className="socialMedia">
              {socialSymbol}
            </div>
          );
        })}
        <i> © 2006-2022 Zillow</i>
      </div>
      <div style={{ color: "#0d4599", fontSize: "1.7rem", marginTop: "1rem" }}>
        <FaWarehouse />
      </div>
      <img src="http://www.w3.org/2000/svg" alt="" />
    </div>
  );
};

export default FooterInfo;
