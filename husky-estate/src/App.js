import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomesListing from "./Pages/HomesListing";
import HomesSearch from "./Pages/HomesSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route exact path="/buy" element={<HomesListing buy={true} key="buy"/>} />
        <Route exact path="/rent" element={<HomesListing buy={false} key="rent" />} />
        <Route exact path="/search" element={<HomesSearch />} />


        {/* <Route exact path="/homesForRent" element={<HomesForRent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
