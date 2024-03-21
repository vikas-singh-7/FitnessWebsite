import React from "react";

const AsanCard = ({ heading, para, image }) => {
  return (
    <div className="group relative h-full w-full">
      <div className="h-full w-full relative overflow-hidden ">
        <img src={image} alt="" />
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="content text-black bg-transparent backdrop-blur-lg ">
            <h2 className="text-2xl font-serif">{heading}</h2>
            <p className="text-xl font-serif">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsanCard;
