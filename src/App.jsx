import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Information from "./components/Information";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Asanas from "./components/pages/Asanas";
import Home from "./components/pages/Home";
import Timetable from "./components/pages/Timetable";

const App = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage /> <Information /> <Cards />
            </>
          }
        />
        <Route path="/asanas" element={<Asanas />} />
        <Route path="/homecines" element={<Home />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>

      {/* <Information /> */}
      {/* <Slider /> */}
      {/* <Cards /> */}
      <Footer />
    </div>
  );
};

export default App;
