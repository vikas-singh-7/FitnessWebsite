import React from "react";
import { useEffect } from "react";
import Timetablechild from "../Timetablechild";

const Timetable = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <div className="h-[100vh] bg-yellow-400">
      <div className="h-[12vh]"></div>
      <div className="table1 h-[100vh]  grid grid-cols-12 grid-rows-12 ">
        <div
          className="col-span-4  row-span-10 bg-center bg-cover group relative flex overflow-hidden "
          style={{ backgroundImage: "url('time1.webp')" }}
        >
          <h2 className="text-[3rem]  font-serif text-white font-[500] absolute bottom-0 translate-y-full bg-violet-500 bg-opacity-50 backdrop-blur-sm group-hover:translate-y-0 w-full flex transition-all duration-300 ease-in-out">
            A Worried Student ?{" "}
          </h2>
        </div>
        <Timetablechild />

        <Timetablechild />
      </div>
    </div>
  );
};

export default Timetable;
