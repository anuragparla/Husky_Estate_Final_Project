import React, { useEffect, useState } from "react";
import { URL } from "../util/constants";
import Navbar from "../Components/Navbar";
import HomeGrid from "../Components/HomeGrid";
import Footer from "../Components/Footer";

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
      <div className="container p-10">
        <span className="text-2xl">Properties for {buy ? "Sale" : "Rent"}</span>
        <HomeGrid className="mt-4" properties={properties}></HomeGrid>
      </div>
    </>
  );
};

export default HomesListing;
