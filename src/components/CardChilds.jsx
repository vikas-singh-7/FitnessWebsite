import React from "react";
import Button from "./Button";

const CardChilds = ({ image, desc, desc2, links }) => {
  return (
    <div className="h-full w-full hover:scale-105 bg-[#565554]  flex rounded-2xl  p-2 flex-col gap-5 transition-all duration-[300ms] ease-in-out">
      <div className="h-[60%] w-full  overflow-hidden rounded-xl flex">
        <img src={image} alt="" height="100%" className="h-full w-full" />
      </div>
      <div className=" h-[35%] p-2 w-full flex flex-col gap-4 rounded-xl">
        <div className=" h-[22%] bg-green-500 rounded-lg w-[60%] p-2 px-7 flex justify-center items-center ">
          {" "}
          <h1 className="text-xl text-white font-serif">{desc2}</h1>
        </div>
        <div className="bg-purple-500 h-[40%] rounded-md p-1 ">
          <h2 className="text-lg font-mono text-white leading-none">{desc}</h2>
        </div>
        <div className=" h-[25%] ">
          <Button routelink={links}>Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default CardChilds;
