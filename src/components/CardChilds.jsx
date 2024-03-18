import React from "react";
import Button from "./Button";

const CardChilds = ({ image, desc }) => {
  return (
    <div className="h-full w-full hover:scale-105 bg-teal-600  flex rounded-2xl justify-center items-center p-2 flex-col gap-5 transition-all duration-100 ease-in-out">
      <div className="h-[70%] w-full   bg-red-400 overflow-hidden rounded-xl  flex">
        <img src={image} alt="" height="100%" className="h-full w-full" />
      </div>
      <div className="h-[30%] p-2 w-full flex flex-col gap-5">
        <h2 className="text-lg font-mono">{desc}</h2>
        <Button>Read more</Button>
      </div>
    </div>
  );
};

export default CardChilds;
