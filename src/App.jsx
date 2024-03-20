import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Information from "./components/Information";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Asanas from "./components/pages/Asanas";
import Home from "./components/pages/Home";
import Timetable from "./components/pages/Timetable";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

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
      {/* <LandingPage />
      <Information />
      <Cards /> */}

      <Footer />
    </div>
  );
};

export default App;

//chat on click on cards i am sucessfully navigating to routes pages but i want that when i visit my route page i will land on top of page its landing on mid

// solution To ensure that when you navigate to a route page, it lands at the top of the page, you can use useEffect hook in your route components to scroll to the top of the page whenever the component mounts. Here's how you can modify your route components to achieve this:

// import React, { useEffect } from "react";

// const YourRouteComponent = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
//   }, []);

//   // Your component JSX
//   return (
//     // Your component JSX here
//   );
// };

// export default YourRouteComponent;

//By using window.scrollTo(0, 0) inside useEffect with an empty dependency array ([]), you ensure that it only runs once when the component mounts, effectively scrolling to the top of the page whenever the component is rendered.

// You would apply this modification to each of your route components (Asanas, HomeCines, Timetable, etc.) where you want the page to scroll to the top upon navigation.
