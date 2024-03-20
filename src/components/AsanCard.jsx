import React from "react";

const AsanCard = ({ heading, para,image }) => {
  return (
    <div className="group">
      <div class="h-full w-full relative overflow-hidden ">
        <img src={image} alt="" class="" />
        <div class="absolute bottom-0 left-0 right-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div class="content text-black bg-transparent backdrop-blur-lg ">
            <h2 class="text-2xl font-serif">{heading}</h2>
            <p class="text-xl font-serif">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsanCard;
