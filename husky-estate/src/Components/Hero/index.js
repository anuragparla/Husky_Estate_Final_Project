import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const searchRef = useRef(null);

  const handleScroll = () => {
    if (searchRef.current.getBoundingClientRect().bottom < 0) {
      searchRef.current.classList = "search-1";
    }
    if (window.pageYOffset === 0) {
      searchRef.current.classList = "search-2";
    }
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleClick() {
    if(!location) {
      alert("No Query Given")
      return;
    }
    window.open(`/search?q=${location}`).focus();
  }

  return (
    <section className="hero">
      <div className="center-content">
        <h3>Change starts here</h3>
        <div className="search-top">
          <div className="search-2" ref={searchRef}>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-box"
              type="text"
              placeholder="Enter the name of city"
            />
            {/* <button  onSubmit={search}> */}
            <FaSearch className="icon" />
            {/* </button> */}
            <div
              className="search-icon"
              style={{
                background: "#fff",
                width: "17%",
                height: "3.4rem",
                borderTopRightRadius: "0.3rem",
                borderEndEndRadius: "0.3rem",
              }}
              onClick={() => handleClick()}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;