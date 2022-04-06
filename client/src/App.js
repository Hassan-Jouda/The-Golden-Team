import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

import Home from "./Pages/Home";
import Communtiy from "./Pages/Communtiy";
import Profile from "./Pages/Profile";
import Workers from "./Pages/Workers";
import WProfile from "./Pages/WProfile";
import Customer from "./Pages/login/customer/Customer";
import CustomerSignup from "./Pages/login/customer/CustomerSignup";
import Worker from "./Pages/login/worker/Worker";
import WorkerSignup from "./Pages/login/worker/WorkerSignup";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/About" element={<About />} />

          <Route path="/Customer" element={<Customer />} />
          <Route path="/CustomerSignup" element={<CustomerSignup />} />

          <Route path="/Worker" element={<Worker />} />
          <Route path="/WorkerSignup" element={<WorkerSignup />} />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/WProfile" element={<wProfile />} />
          <Route path="/Workers" element={<Workers />} />
          <Route path="/Communtiy" element={<Communtiy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
