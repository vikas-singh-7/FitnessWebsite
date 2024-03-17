import React from "react";

const Information = () => {
  return (
    <div className="h-screen bg-[#FF6978] p-5 flex justify-center items-center">
      <div className="inner bg-[#8FB8DE] h-[100%] w-full rounded-xl grid grid-cols-12 gap-5 p-5 grid-rows-12">
        <div className="col-span-12  row-span-4 rounded-md p-3">
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

        <div className="col-span-6 row-span-8  bg-yellow-400  rounded-xl "></div>
        <div className="col-span-6 row-span-8  bg-yellow-400  rounded-xl "></div>
      </div>
    </div>
  );
};

export default Information;
