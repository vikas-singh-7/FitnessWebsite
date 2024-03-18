import React from "react";
import CardChilds from "./CardChilds";

const Cards = () => {
  return (
    <div className="h-screen bg-[#52B788] flex justify-center items-center p-5">
      <div className="bg-[#592941] rounded-xl h-full w-full flex justify-around items-center p-5">
        <div className="h-[90%] w-[30%]  rounded-xl flex p-4 justify-center items-center">
          <CardChilds
            image={"yogaasanas.webp"}
            desc={` Asana is a Sanskrit term which is often translated as “posture” or
          “pose.”`}
          />
        </div>
        <div className="h-[90%]  w-[30%]  rounded-xl flex p-4">
          <CardChilds
            image={"homecines.webp"}
            desc={`Many home remedies exist that may help treat a variety of things, such as colds, inflammation, and pain.`}
          />
        </div>
        <div className="h-[90%] w-[30%]  rounded-xl flex p-4">
          <CardChilds
            image={"timetable.webp"}
            desc={"Find a timetable , which fits according to your living"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
