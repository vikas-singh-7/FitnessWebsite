import React from "react";
import { useEffect } from "react";

const Timetable = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <div className="h-auto">
      <div className="h-[12vh]"></div>
      <div className="table1 h-[100vh] bg-yellow-400 grid grid-cols-12 grid-rows-12">
        <div className="col-span-12 bg-zinc-700 row-span-2 flex justify-center items-center">
          <h2 className="text-[3rem] font-serif">
            Worry About Time ? Here's some good Schedules
          </h2>
        </div>
        <div
          className="col-span-4  row-span-10 bg-center bg-cover "
          style={{ backgroundImage: "url('time1.webp')" }}
        ></div>
        <div className="col-span-4 bg-green-500 row-span-10">
          <div className="heading flex px-10 items-center bg-yellow-300">
            <h2 className="text-[3rem] font-serif">Schedule 1</h2>
          </div>
        </div>
        <div className="col-span-4 bg-red-500 row-span-10"></div>
      </div>
    </div>
  );
};

export default Timetable;
