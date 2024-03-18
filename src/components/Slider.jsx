import { animate } from "framer-motion";
import React from "react";
import { useRef } from "react";

const Slider = () => {
  const refr = useRef();
  const images = [
    {
      name: "image1",
      url: "slide1.webp",
    },
    {
      name: "image2",
      url: "slide2.jpg",
    },
    {
      name: "image3",
      url: "slide3.jpg",
    },
    {
      name: "image4",
      url: "slide4.jpg",
    },
  ];
  const slideLeft = () => {
    console.log("clikded");
    refr.current.focus();
  };
  return (
    <div className="h-[50vh] w-full bg-red-500 grid grid-rows-1 relative">
      {images.map((item) => {
        return (
          <div
            ref={refr}
            key={item.name}
            className="w-full h-full  bg-no-repeat bg-cover bg-center absolute "
            style={{
              backgroundImage: `url(${item.url})`,
            }}
          ></div>
        );
      })}
      <button className="absolute rounded-full h-[3rem] w-[3rem] bg-teal-400 top-[45%]">
        left
      </button>
      <button
        onClick={slideLeft}
        className=" top-[45%] right-[0] absolute rounded-full h-[3rem] w-[3rem] bg-teal-400"
      >
        right
      </button>
    </div>
  );
};

export default Slider;
