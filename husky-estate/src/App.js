import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomesForSale from "./Pages/HomesForSale";
import AdminPage from "./Pages/AdminPage";
// import HomesForRent from "./Pages/HomesForRent";
//import AdminPage from "./Pages/AdminPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route exact path="/homesForSale" element={<HomesForSale />} />
        <Route exact path="/homesForRent" element={<HomesForSale />} />
        <Route exact path="/admin" element={<AdminPage />} />
        {/* <Route exact path="/homesForRent" element={<HomesForRent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
