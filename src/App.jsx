import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Information from "./components/Information";
import Slider from "./components/Slider";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <LandingPage />
      <Information />
      {/* <Slider /> */}
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
