import React from "react";

const Footer = () => {
  const address = ["Punjab", "Pathankot", "Dunera", "Lehroon"];
  const education = ["Vikas singh", "Male", "B.tech", "CSE"];
  const contacts = [
    {
      name: "GitHub",
      link: "https://github.com/vikas-singh-7/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vikas-singh-a7229626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/rajputvikas_1?utm_source=qr&igsh=NTFmMGw3bDM3aTZm",
    },
  ];
  return (
    <div className="h-screen  p-5 bg-zinc-800 flex gap-5 ">
      <div className="h-full w-1/2  grid grid-cols-1 grid-rows-12">
        <div className=" row-span-10 p-10 flex flex-col ">
          <div className="firt h-[30%] text-white flex justify-start items-center text-8xl font-serif">
            Lift YourSelf ,
          </div>
          <div className="firt h-[30%] text-white flex ml-5 items-center text-8xl fontserif">
            a little Up....
          </div>
        </div>
        <div className=" row-span-2 flex justify-start items-center  font-serif px-10">
          <div className="text-white text-4xl  font-serif">Rajput Vikas</div>
        </div>
      </div>
      <div className="h-full w-1/2  grid grid-cols-1 grid-rows-12">
        <div className=" row-span-12 rounded-xl bg-red-500 p-5 flex flex-col ">
          <div className="firt h-[30%]  text-white flex justify-start items-center text-8xl font-serif">
            Contact Me
          </div>
          <div className=" firt h-[70%] w-full  text-white grid grid-rows-2 grid-cols-12   fontserif">
            <div className="col-span-12  p-5 flex flex-col  font-serif text-xl">
              {contacts.map((item) => {
                return (
                  <span key={item.name} className="hover:text-black ">
                    <a href={item.link} target="blank">
                      {item.name}
                    </a>
                  </span>
                );
              })}
            </div>
            <div className="col-span-6 -mt-[100px]  px-5 py-3 row-span-1">
              {address.map((item, index) => (
                <span key={index}>
                  <div className="flex hover:text-black flex-col text-xl font-serif">
                    {item}
                  </div>
                </span>
              ))}
            </div>
            <div className="col-span-6 -mt-[100px]  px-5 py-3 row-span-1">
              {education.map((item, index) => (
                <span key={index}>
                  <div className=" hover:text-black flex flex-col text-xl font-serif">
                    {item}
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
