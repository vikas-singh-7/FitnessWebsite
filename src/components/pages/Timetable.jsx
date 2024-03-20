import React from "react";
import { useEffect } from "react";

const Timetable = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return <div className="h-screen bg-green-600">Timetable</div>;
};

export default Timetable;
