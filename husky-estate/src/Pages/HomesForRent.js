import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import FooterInfo from "../Components/FooterInfo";
import { HomesForRent } from "../../data";
import { Link } from "react-router-dom";

const HomesDisplay = () => {
  // useEffect(() => {
  //   fetch(
  //     'https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=3199790641',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
  //         'x-rapidapi-key':
  //           '47b3ac660fmshae44528d370f65fp1d52dbjsn10d2752ca9ea',
  //       },
  //     }
  //   ).then((response) => {
  //     console.log(response);
  //   });

  // });
  return (
    <>
      <div className="search-nav">
        <button className="nav-toggle">
          <FaBars
            style={{
              color: "#006aff",
              fontSize: "20px",
            }}
            className="nav-toggle"
            // onClick={() => setShowLinks(true)}
          />
        </button>
        <span>
          <Link to={"/"}>
            <img
              style={{
                alignSelf: "center",
                height: "25px",
                paddingInline: "0.5rem",
              }}
              src="https://s.zillowstatic.com/pfs/static/z-logo-icon.svg"
              alt="zillow logo"
            />
          </Link>
        </span>
        {/* <div> */}
        <input
          className="search-box-homes"
          type="text"
          placeholder="Location"
          style={{ height: "34px" }}
        />
        {/* </div> */}
        <span>
          <a
            href="/"
            className="links"
            style={{
              color: "#006aff",
              fontSize: "0.9rem",
              paddingInline: "0.6rem",
              fontFamily:
                "Open Sans, Adjusted Arial, Tahoma, Geneva, sans-serif !important",
            }}
          >
            Sign In
          </a>
        </span>
      </div>
      <div className="variables-nav">
        {/* make this part dynamic to container for 'For Sale' as well */}
        <button className="rent-sale-btn" style={{ width: "25%" }}>
          <FaCircle style={{ fontSize: "0.7rem", color: "#9434E3" }} /> For Rent
        </button>
        <button className="rent-sale-btn" style={{ width: "20%" }}>
          Price
        </button>
        <button className="rent-sale-btn" style={{ width: "20%" }}>
          More
        </button>
        <button
          className="rent-sale-btn"
          style={{ border: "0px", backgroundColor: "transparent" }}
        >
          Save search
        </button>
      </div>
      <div className="homes">
        <div className="home-title">
          <h4>
            {HomesForRent.city} {HomesForRent.state} Rental Listings
          </h4>
          <div className="randoms">
            <h5 className="one">{HomesForRent.length} results</h5>
            <h5 className="two">Sorted by nearest</h5>
          </div>
        </div>
        <div className="home-cards">
          {HomesForRent.map((home) => {
            const {
              id,
              price,
              img,
              beds,
              baths,
              sqft,
              address,
              city,
              state,
              zip,
            } = home;

            return (
              <article key={id} className="home-card">
                <img className="home-img" src={img} alt="img" />
                <div className="card-info">
                  <h4>{price}/mon</h4>
                  <p className="utilities">
                    {" "}
                    {beds} bd {baths} ba {sqft} sqft - Apartment for rent
                  </p>
                  <p className="location">
                    {address}, {city}, {state} {zip}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <FooterInfo />
    </>
  );
};

export default HomesDisplay;
