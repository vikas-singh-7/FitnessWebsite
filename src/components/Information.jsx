import React from "react";

const Information = () => {
  return (
    <div
      data-scroll
      data="true"
      data-scroll-speed="-.1"
      className="h-screen bg-[#FF6978] p-5 flex justify-center items-center"
    >
      <div className="inner bg-[#8FB8DE] h-[100%] w-full rounded-xl grid grid-cols-12 gap-5 p-5 grid-rows-12">
        <div className="col-span-12  row-span-4 p-4 ">
          <div className="heading text-[3rem] font-sans mt-6">
            Lets know ourself
          </div>
          <div className="border-t-[1px] border-zinc-700 mt-8"></div>
        </div>
        <div className="col-span-12 row-span-12 grid grid-cols-12    rounded-xl gap-5 p-5  overflow-hidden ">
          <div className="col-span-6 overflow-hidden bg-violet-500 rounded-md  bg-center bg-cover bg-no-repeat bg-[url('yogamain4.jpeg')] hover:scale-105 transition-all ease-in-out duration-200"></div>

          <div className="col-span-6 bg-violet-500 rounded-md hover:scale-105 transition-all duration-200">
            <div className="pt-5">
              <h2 className="text-3xl font-mono text-center">
                Meditation Is the Only Answer
              </h2>
            </div>
            <div className="p-8 ">
              <h3 className="text-2xl font-mono tracking-tight">
                “Meditation is the only answer to all the questions of man. It
                may be frustration, it may be depression, it may be sadness, it
                may be meaninglessness, it may be anguish: The problems may be
                many but the answer is one. Meditation is the answer.”
              </h3>
            </div>
            <div className="p-5">
              <p className="text-right text-xl font-semibold">
                Osho, Light on the Path
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
