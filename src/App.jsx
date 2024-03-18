import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Information from "./components/Information";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <LandingPage />
      <Information />
      {/* <Slider /> */}
    </div>
  );
};

export default App;
