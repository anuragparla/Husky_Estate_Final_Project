import React, { useEffect, useState } from "react";
import { URL } from "../util/constants";
import Navbar from "../Components/Navbar";
import HomeCard from "../Components/HomeCard";
import HomeGrid from "../Components/HomeGrid";

const HomesListing = ({ buy }) => {
  const columnsPerRow = 4;

  const [properties, setProperties] = useState([]);


  useEffect(() => {
    let buyOrRent = buy ? "buy" : "rent";
    fetch(
      `${URL}/property/${buyOrRent}`,
      {
        method: 'GET',
      }
    ).then((response) => {
      return response.json();
    }).then((json) => {

      if(!json.success) {
        alert(json.message);
        return;
      } else setProperties(json.data);

    });

  }, []);


  return (
    <>
      <Navbar />
      <div className="container  p-5">
        <span className="text-2xl">Properties for {buy ? "Sale" : "Rent"}</span>
        <HomeGrid properties={properties}></HomeGrid>

      </div>
    </>
  );
};

export default HomesListing;
