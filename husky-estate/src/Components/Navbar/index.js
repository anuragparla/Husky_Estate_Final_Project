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
    <li><Link class="text-gray-700 hover:text-he-blue link link-hover" to={to} >{children}</Link></li>
  );
}

const Navbar3 = () => {

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

  const LoginSignup = () => {
    return (
      <div class="navbar-end flex flex-row gap-4">
        <Link class="btn btn-ghost" to="/login">Login</Link>
        <Link class="btn btn-primary" to="/signup">Signup</Link>
      </div>
    )
  }

  const AccountLogout = () => {
    return (
      <div class="navbar-end flex flex-row gap-4">
        <span>{account.name}</span>
        <Link class="btn btn-primary" to="/Logout">Logout</Link>
      </div>
    )
  }

  const UserNavigate = () => {
    return (
      <>
        <PageLink to="/buy">Buy</PageLink>
        <PageLink to="/rent">Rent</PageLink>
        <PageLink to="/agents">Agents</PageLink>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/contact">Contact</PageLink>

      </>
    )
  }

  const AdminNaviage = () => (
    <>
      <PageLink to="/addProp">Add Property</PageLink>
      <PageLink to="/rent">Rent</PageLink>
      <PageLink to="/buy">Buy</PageLink>

    </>

  )


  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {isAdmin ? <AdminNaviage/> : <UserNavigate/> }
          </ul>
        </div>
        <Link class="btn btn-ghost normal-case text-xl" to="/">HuskyEstate</Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
        {isAdmin ? <AdminNaviage/> : <UserNavigate/> }
        </ul>
      </div>
      {account ? <AccountLogout></AccountLogout> : <LoginSignup></LoginSignup>}
    </div>
  )
};



export default Navbar3;
