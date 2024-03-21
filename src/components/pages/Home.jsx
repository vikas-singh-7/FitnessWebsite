import React from "react";
import { useEffect } from "react";
import AsanCard from "../AsanCard";

import CardChilds from "../CardChilds";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <>
      <div className="h-[10vh] w-full bg-[#27272A] "></div>
      <div className="h-auto bg-zinc-800 ">
        <div className="grid grid-cols-12 rounded-xl grid-rows-12 h-screen gap-1 w-full">
          <div
            className="col-span-3 bg-blue-400 row-span-6 flex justify-center items-center basis-full"
            style={{
              backgroundImage: "url(/Remidies/rem1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <AsanCard
              heading={"1.Peppermint"}
              para={
                "Mint has been used for hundreds of years as a health remedy. Peppermint oil might help with irritable bowel syndrome -- a long-term condition that can cause cramps, bloating, gas, diarrhea, and constipation -- and it may be good for headaches as well."
              }
            />
          </div>

          <div
            className="col-span-3 bg-blue-400 row-span-6
        bg-[url('/Remidies/rem2.webp')] bg-center bg-cover"
          >
            {" "}
            <AsanCard
              heading={"2.Honey"}
              para={
                "This natural sweetener may work just as well for a cough as over-the-counter medicines. That could be especially helpful for children who aren’t old enough to take those. But don’t give it to an infant or a toddler younger than 1. There’s a small risk of a rare but serious kind of food poisoning that could be dangerous for them"
              }
            />{" "}
          </div>
          <div className="col-span-3 bg-blue-400 row-span-6  bg-[url('/Remidies/rem3.webp')] bg-center bg-cover ">
            {" "}
            <AsanCard
              heading={"3.Turmeric"}
              para={
                "This spice has been hyped as being able to help with a variety of conditions from arthritis to fatty liver. There is some early research to support this. Other claims, such as healing ulcers and helping with skin rashes after radiation are lacking proof. "
              }
            />{" "}
          </div>
          <div className="col-span-3 bg-blue-400 row-span-6  bg-[url('./public/Remidies/rem4.webp')] bg-center bg-cover">
            {" "}
            <AsanCard
              heading={"4.Ginger"}
              para={
                "It’s been used for thousands of years in Asian medicine to treat stomachaches, diarrhea, and nausea, and studies show that it works for nausea and vomiting. There’s some evidence that it might help with menstrual cramps, too. But it’s not necessarily good for everyone. Some people get tummy trouble, heartburn, diarrhea, and gas because of it"
              }
            />{" "}
          </div>
          <div className="col-span-3 bg-blue-400 row-span-6  bg-[url('./public/Remidies/rem5.webp')] bg-center bg-cover">
            {" "}
            <AsanCard
              heading={"5.Green Tea"}
              para={
                "This comforting drink does more than keep you awake and alert. It’s a great source of some powerful antioxidants that can protect your cells from damage and help you fight disease. It may even lower your odds of heart disease and certain kinds of cancers, like skin, breast, lung, and colon."
              }
            />{" "}
          </div>
          <div className="col-span-3 bg-blue-400 row-span-6  bg-[url('./public/Remidies/rem6.webp')] bg-center bg-cover">
            {" "}
            <AsanCard
              heading={"6.Garlic"}
              para={
                "Some studies show that people who eat more garlic are less likely to get certain types of cancer (garlic supplements don’t seem to have the same effect). It also may lower blood cholesterol and blood pressure levels, but it doesn’t seem to help that much."
              }
            />{" "}
          </div>
          <div className="col-span-3 bg-blue-400 row-span-6  bg-[url('./public/Remidies/rem7.webp')] bg-center bg-cover">
            {" "}
            <AsanCard
              heading={"7.Chicken Soup"}
              para={
                "Turns out, Grandma was right: Chicken soup can be good for a cold. Studies show it can ease symptoms and help you get rid of it sooner. It also curbs swelling and clears out nasal fluids."
              }
            />{" "}
          </div>
          <div className="col-span-3 bg-blue-400 row-span-6  bg-[url('./public/Remidies/rem8.webp')] bg-center bg-cover">
            {" "}
            <AsanCard
              heading={"8.Cinnamon"}
              para={
                "You may have heard that it can help control blood sugar for people who have prediabetes or diabetes. But there’s no evidence that it does anything for any medical condition. If you plan to try it, be careful: Cinnamon extracts can be bad for your liver in large doses."
              }
            />{" "}
          </div>
        </div>
        <div className="h-[100vh] w-full overflow-hidden bg-zinc-800 grid grid-cols-12 grid-rows-1 gap-1 justify-between ">
          <div
            className="col-span-6 rounded-md overflow-hidden p-5  row-span-1"
            onClick={() => {
              navigate("/asanas");
            }}
          >
            <CardChilds
              links={"/asanas"}
              desc2={"Asanas"}
              image={"yogaasanas.webp"}
              desc={` Asana is a Sanskrit term which is often translated as “posture” or
          “pose.”`}
            />
          </div>
          <div
            className="col-span-6 rounded-md overflow-hidden p-5  row-span-1"
            onClick={() => {
              navigate("/timetable");
            }}
          >
            <CardChilds
              links={"/timetable"}
              desc2={"Timetable"}
              image={"timetable.webp"}
              desc={"Find a timetable , which fits according to your living"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <AsanCard
  heading={"6. Bridge Pose (Setu Bandha Sarvangasana)"}
  para={
    "Another popular backbend, this pose can help improve posture and also relieve lower back pain."
  }
  image={"asan8.jpg"}
/>; */
}
