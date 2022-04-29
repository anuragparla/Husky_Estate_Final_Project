import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

import "./Hero.css"
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const [location, setLocation] = useState("");
  const searchRef = useRef(null);
  let navigate = useNavigate();

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
    navigate(`/search?q=${location}`, { replace: true })

  }

  return  (
    <div class="hero min-h-screen bgimg">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Search your Ideal Home</h1>
      {/* <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <center>
      <div className="flex flex-col gap-4">
      <div>
      <input  value={location}
              onChange={(e) => setLocation(e.target.value)} 
              type="text" 
              placeholder="Type here" 
              class="grow input input-bordered w-full max-w-xs text-black" />
       </div>
       <div>
       <button class="btn btn-primary" onClick={handleClick}>Search</button>
       </div>
      </div>
      </center>
    </div>
  </div>
</div>
  );
}
export default Hero;