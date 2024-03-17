import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default App;
