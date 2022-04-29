import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AdminPage from "./Pages/admin/AdminPage";
import Agents from "./Pages/Agents";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import HomesListing from "./Pages/HomesListing";
import HomesSearch from "./Pages/HomesSearch";
import ListedHome from "./Pages/ListedHome";
import LoginPage from "./Pages/Login";
import LogoutPage from "./Pages/Logout";
import SignupPage from "./Pages/Signup";

import {LoadScript} from '@react-google-maps/api'
import EditAdminPage from "./Pages/admin/EditAdminPage";

function App() {
  return (
    <LoadScript
    googleMapsApiKey="AIzaSyCQHWbUS4oyxGZhmorX94Y4PSz9lSpKIg0"
>

    <Router>
      <Routes>
         <Route path="/" exact element={<HomePage />} />
        <Route exact path="/buy" element={<HomesListing buy={true} key="buy"/>} />
        <Route exact path="/rent" element={<HomesListing buy={false} key="rent" />} />
        <Route exact path="/search" element={<HomesSearch />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/logout" element={<LogoutPage />} />
        <Route exact path="/addProp" element={<AdminPage />} />
        <Route exact path="/editProp" element={<EditAdminPage />} />
        <Route exact path="/property" element={<ListedHome />} />
        
        {/* <Route exact path="/homesForRent" element={<HomesForRent />} /> */}
      </Routes>
    </Router>
    </LoadScript>
  );
}

export default App;
