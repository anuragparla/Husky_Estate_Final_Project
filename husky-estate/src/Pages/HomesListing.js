import React, { useEffect, useState } from "react";
import { URL } from "../util/constants";
import Navbar from "../Components/Navbar";
import HomeGrid from "../Components/HomeGrid";
import Footer from "../Components/Footer";
import Cookies from "universal-cookie";

const HomesListing = ({ buy }) => {
  const columnsPerRow = 4;

  const [properties, setProperties] = useState([]);

  const [account, setAccount] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    if (!account) {
      const token = new Cookies().get("auth");
      getAccount(token);
    }
  }, []);

  useEffect(() => {

    if (!account || !(account.userType === "ADMIN")) {
      setIsAdmin(false);
    } else setIsAdmin(true);

  }, [account]);

  const getAccount = async (token) => {

    let res = await fetch(`${URL}/auth/me`, {
      method: "GET",
      headers: {
        "x-access-token": token
      }
    });

    if (res.status === 200) {
      let json = await res.json();
      console.log(json);
      setAccount(json.data);
    }
  }



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
        <HomeGrid className="mt-4" properties={properties} isAdmin={isAdmin}></HomeGrid>
      </div>
    </>
  );
};

export default HomesListing;
