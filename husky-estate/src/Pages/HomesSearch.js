import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { URL } from "../util/constants";
import Footer from "../Components/Footer";
import Cookies from "universal-cookie";

import { useLocation } from "react-router-dom";
import Navbar3 from "../Components/Navbar";
import HomeGrid from "../Components/HomeGrid";

import { useSearchParams } from "react-router-dom";

const HomesSearch = () => {


  const [properties, setProperties] = useState([]);
  const [query, setQueryParam] = useSearchParams();
  const [searchQuery, setSearch] = useState(null);
  const [newQuery, setNewQuery] = useState("");

  const [isAdmin, setIsAdmin] = useState(null);



  useEffect(() => {

    if(!searchQuery) {
      setSearch(query.get("q"));  
    } 
    if (isAdmin === null) {
      const token = new Cookies().get("auth");
      getAccount(token); 
    }

  }, []);

  useEffect(() => {
    if(searchQuery)
    search();
  }, [searchQuery])


  const search = () => {
    console.log(searchQuery, "Queried");
    fetch(`${URL}/property/search/${searchQuery}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if(!json.success) {
        alert(json.message);
        return;
      } else setProperties(json.data);  
    })
    .catch(console.error);
  }

  const handleClick = () => {
    
    setSearch(newQuery);
    search();
  };


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
      let acc = json.data;
      if (!acc || !(acc.userType === "ADMIN")) {
        setIsAdmin(false);
      } else setIsAdmin(true);
      }
  }



  

  return (
    <>
      <Navbar3></Navbar3>
      <div className="container p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <input class="grow p-3 mt-1 text-sm border-2 border-gray-200 rounded" id="email" type="text" 
              placeholder="Search..." value={newQuery}  onChange={(e) => setNewQuery(e.target.value)}
              />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="text-3xl">
              Listings for <span className="text-blue-500">"{searchQuery}"</span>
          </div>
          <HomeGrid properties={properties} isAdmin={isAdmin}></HomeGrid> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomesSearch;
