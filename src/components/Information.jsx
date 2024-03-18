import React from "react";

const Information = () => {
  return (
    <div className="h-screen bg-[#FF6978] p-5 flex justify-center items-center">
      <div className="inner bg-[#8FB8DE] h-[100%] w-full rounded-xl grid grid-cols-12 gap-5 p-5 grid-rows-12">
        <div className="col-span-12  row-span-4 rounded-md p-3 flex justify-center items-center">
          <p className="text-2xl font-mono subpixel-antialiased ">
            Health refers to a state of complete physical, mental, and social
            well-being, not merely the absence of disease or infirmity.It is a
            positive concept emphasizing social and personal resources, as well
            as physical capacities.Mental health is an integral component of
            health, and it is more than just the absence of mental disorders or
            disabilities.Health is a resource for everyday life, not the
            objective of living, emphasizing social and personal resources, as
            well as physical capacities.
          </p>
        </div>

        <div className="col-span-12 row-span-8 grid grid-cols-12  bg-yellow-400  rounded-xl gap-5 p-5   ">
          <div className="col-span-6 overflow-hidden bg-violet-500 rounded-md  bg-center bg-cover bg-no-repeat bg-[url('yogamain4.jpeg')] "></div>
          <div className="col-span-6 bg-violet-500 rounded-md ">
            <div className="pt-5">
              <h2 className="text-3xl font-mono text-center">
                Meditation Is the Only Answer
              </h2>
            </div>
            <div className="p-8">
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
