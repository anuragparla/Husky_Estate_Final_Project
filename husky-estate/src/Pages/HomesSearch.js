import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import FooterInfo from "../Components/Footer/FooterInfo";
import { Link } from "react-router-dom";
import { URL } from "../util/constants";

import { useLocation } from "react-router-dom";
import Navbar3 from "../Components/Navbar";
import HomeGrid from "../Components/HomeGrid";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const HomesSearch = () => {


  const [properties, setProperties] = useState([]);
  let query = useQuery();
  const [searchQuery, setSearch] = useState("");
  const [newQuery, setNewQuery] = useState("");

  useEffect(() => {
    setSearch(query.get("q"));
  }, []);

  useEffect(() => {

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

  }, [searchQuery]);

  const handleClick = () => {
    setSearch(newQuery);
  };

  return (
    <>
      <Navbar3></Navbar3>
      <div className="container p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <input class="grow p-3 mt-1 text-sm border-2 border-gray-200 rounded" id="email" type="text" 
              placeholder="Search..." value={newQuery}  onChange={(e) => setNewQuery(e.target.value)}
              />
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="text-3xl">
              Listings for <span className="text-blue-500">"{searchQuery}"</span>
          </div>
          <HomeGrid properties={properties}></HomeGrid>
        </div>
      </div>
      <FooterInfo />
    </>
  );
};

export default HomesSearch;
