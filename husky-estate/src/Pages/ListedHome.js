import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar3 from "../Components/Navbar";
import { URL } from "../util/constants";
import HomeDetailts from "../Components/HomeDetails";

import { useSearchParams } from "react-router-dom";


const ListedHome = ({  }) => {

    const [home, setHome] = useState(null);
    const [searchParams, setSearch] = useSearchParams();


    useEffect(() => {

        findHome();

    }, []);

    const findHome = async () => {
        let response = await fetch(`${URL}/property/get/${searchParams.get("id")}`);
        if(response.status !== 200) {
            alert("Home not found");
            return;
        }
        let json = await response.json();
        console.log(json);
        if(json.success) {
            setHome(json.data);
        } else alert("Home not found");
    }

    return (
        <>
            <Navbar3></Navbar3>
            <div className="container">
                {home ? <HomeDetailts home={home}></HomeDetailts> : <>No Home Found</>}
            </div>
            <Footer></Footer>
        </>
    )
}


export default ListedHome