import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

import Home from "./Pages/Home";
import Communtiy from "./Pages/Communtiy";
import Profile from "./Pages/Profile";
import WProfile from "./Pages/WProfile";
import CustomerSignup from "./Pages/login/customer/CustomerSignup";
import WorkerSignup from "./Pages/login/worker/WorkerSignup";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import EditProfile from "./Pages/EditProfile";
import Login from "./Pages/login/Login";
import Workers from "./Pages/Workers";
import Signup from "./Pages/login/Signup";
import CardProfile from "./Components/CardProfile";
import ProblemsSolving from "./Pages/ProblemsSolving";
function App({ pro, setPro }) {
  const [auth, setAuth] = useState(localStorage.getItem("auth") ? true : false);
  const [current, setCurrent] = useState(
    localStorage.getItem("current")
      ? JSON.parse(localStorage.getItem("current"))
      : {}
  );

  console.log(current);
  return (
    <div className="App">
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />

        <Routes>
          <Route
            path="/"
            exact
            element={<Home auth={auth} setAuth={setAuth} />}
          />
          <Route path="/About" element={<About />} />

          <Route
            path="/Login"
            element={
              <Login
                setAuth={setAuth}
                current={current}
                setCurrent={setCurrent}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                setAuth={setAuth}
                current={current}
                setCurrent={setCurrent}
              />
            }
          />

          <Route
            path="/WorkerSignup"
            element={
              <WorkerSignup
                setAuth={setAuth}
                current={current}
                setCurrent={setCurrent}
                setPro={setPro}
                pro={pro}
              />
            }
          />
          <Route
            path="/CustomerSignup"
            element={
              <CustomerSignup
                setAuth={setAuth}
                current={current}
                setCurrent={setCurrent}
              />
            }
          />
          <Route path="/ProblemsSolving" element={<ProblemsSolving />} />

          <Route path="/WProfile" element={<WProfile />} />
          <Route
            path="/EditProfile"
            element={<EditProfile current={current} setCurrent={setCurrent} />}
          />
          <Route
            path="/Profile"
            element={<Profile current={current} setPro={setPro} pro={pro} />}
          />
          <Route path="/CardProfile" element={<CardProfile />} />
          <Route path="/Workers" element={<Workers />} />
          <Route path="/Communtiy" element={<Communtiy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
