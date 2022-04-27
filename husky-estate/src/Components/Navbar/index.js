import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Links } from "../../data";
import ShowLinks from "../ShowLinks";

import './navbar.css'


const PageLink = ({ to, children }) => {
  return (
    <Link class="text-gray-700 hover:text-he-blue link link-underline link-underline-black" to={to} >{children}</Link>
  );
}

const Navbar3 = () => {
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

        <div class="items-center hidden space-x-4 lg:flex">
          <a
            class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
            href=""
          >
            Log in
          </a>
          <a
            class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
            href=""
          >
            Sign up
          </a>
        </div>
      </div>

      <div class="border-t border-gray-100 lg:hidden">
        <nav
          class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium gap-x-5"
        >
          <PageLink  to="/buy">Buy</PageLink>
          <PageLink  to="/rent">Rent</PageLink>
          <PageLink  to="/agents">Agents</PageLink>
          <PageLink  to="/about">About</PageLink>
          <PageLink  to="/contact">Contact</PageLink>

        </nav>
      </div>
    </header>
  )
};


export default Navbar3;
