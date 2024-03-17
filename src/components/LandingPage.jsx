import React from "react";

import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="h-[88vh] bg-[#967AA1] p-5 flex flex-col space-y-2">
      <div className="child rounded-xl bg-[#D5C6E0] h-full flex gap-10 justify-center items-center px-5">
        <div className="h-[80%] w-1/2  rounded-md p-2 flex flex-col ">
          <div className="quote h-1/2 rounded-md overflow-hidden w-full font-mono px-5">
            <div className="paras text-4xl">
              “Move your joints every day. You have to find your own tricks.
              Bury your mind deep in your heart, and watch the body move by
              itself.”
            </div>
          </div>
          {/* <hr className="border-1 border-black" /> */}
          <div className="paraimage  h-[50%] mt-4 rounded-md grid grid-cols-12 gap-5 p-5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className=" col-span-6 rounded-lg bg-[url('yoga4.webp')] bg-cover bg-top bg-no-repeat bg-h-full bg-w-full bg-white"
            ></motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className=" col-span-6 rounded-lg bg-[url('yoga3.webp')] bg-cover  bg-center bg-no-repeat bg-h-full bg-w-full bg-white"
            ></motion.div>
          </div>
        </div>
        <div className="h-[80%] w-1/2 ">
          <div className="image bg-[url('yogamain.avif')] h-full w-full bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <h2 className=" mt-2 text-2xl font-mono animate-bounce animate-infinite ">
          Scroll Down
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
