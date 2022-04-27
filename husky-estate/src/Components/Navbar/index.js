import React, { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Links } from "../../data";
import ShowLinks from "../ShowLinks";

import './navbar.css'
import Cookies from "universal-cookie";
import { URL } from "../../util/constants";


const PageLink = ({ to, children }) => {
  return (
    <Link class="text-gray-700 hover:text-he-blue link link-hover" to={to} >{children}</Link>
  );
}

const Navbar3 = () => {

  const [account, setAccount] = useState(null);

  useEffect(() => {

    if(!account) {
      const token = new Cookies().get("auth");
      getAccount(token);
    }
  }, []);

  const getAccount = async (token) => {

    let res = await fetch(`${URL}/auth/me`, {
      method: "GET",
      headers: {
        "x-access-token": token
      }
    });

    if(res.status === 200) {
      let json = await res.json();
      console.log(json);
      setAccount(json.data);
    } 
  }

  const LoginSignup = () => {
    return (
      <div class="items-center hidden space-x-4 lg:flex">
      <Link
        class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
        to="/login"
      >
        Log in
      </Link>
      <Link
        class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
        to="/signup"
      >
        Sign up
      </Link>
    </div>
    )
  }

  const AccountLogout = () => {
    return (
      <div class="items-center hidden space-x-4 lg:flex">
      <span>{account.name}</span>
      <Link
        class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
        to="/logout"
      >
        Logout
      </Link>
    </div>
    )
  }


  return (
    <header class="shadow-sm">
      <div
        class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto"
      >
        <div class="flex items-center space-x-4">
          <PageLink to="/"><span className="text-sky-900 text-xl">HuskyEstate</span></PageLink>
        </div>



        <nav
          class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
        >
          <PageLink to="/buy">Buy</PageLink>
          <PageLink to="/rent">Rent</PageLink>
          <PageLink to="/agents">Agents</PageLink>
          <PageLink to="/about">About</PageLink>
          <PageLink to="/contact">Contact</PageLink>

        </nav>

        {account ? <AccountLogout/> : <LoginSignup/>}

      </div>

      <div class="border-t border-gray-100 lg:hidden">
        <nav
          class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium gap-x-5"
        >
          <PageLink to="/buy">Buy</PageLink>
          <PageLink to="/rent">Rent</PageLink>
          {/* <PageLink  to="/agents">Agents</PageLink>
          <PageLink  to="/about">About</PageLink>
          <PageLink  to="/contact">Contact</PageLink> */}
          <PageLink to="/login">Login</PageLink>
          <PageLink to="/signup">Signup</PageLink>
        </nav>
      </div>

    </header>
  )
};



export default Navbar3;
