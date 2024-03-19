import React from "react";
import CardChilds from "./CardChilds";

const Cards = () => {
  return (
    <div className="h-screen bg-[#2E86AB] flex justify-center items-center p-5">
      <div className=" relative bg-violet-400 rounded-xl h-full w-full flex justify-around items-center p-5">
        <div className="desc  absolute top-0 w-full text-4xl px-10 font-serif py-4">
          PICK YOUR CARD
          <hr className="mt-6" />
        </div>

        <div className="flex justify-center items-center h-[92%] w-[full] mt-12">
          <div className="h-[95%] w-[30%]  rounded-xl flex p-4 justify-center items-center">
            <CardChilds
              links={"/asanas"}
              desc2={"Asanas"}
              image={"yogaasanas.webp"}
              desc={` Asana is a Sanskrit term which is often translated as “posture” or
          “pose.”`}
            />
          </div>
          <div className="h-[95%] w-[30%]  rounded-xl flex p-4">
            <CardChilds
              links={"/homecines"}
              desc2={"Home Remedies"}
              image={"homecines.webp"}
              desc={`Many home remedies exist that may help treat a variety of things, such as colds, inflammation, and pain.`}
            />
          </div>
          <div className="h-[95%] w-[30%]  rounded-xl flex p-4">
            <CardChilds
              links={"/timetable"}
              desc2={"Timetable"}
              image={"timetable.webp"}
              desc={"Find a timetable , which fits according to your living"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
