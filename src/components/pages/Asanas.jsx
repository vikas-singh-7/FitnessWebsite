import React from "react";
import AsanCard from "../AsanCard";
import { useEffect } from "react";

const Asanas = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <div className="h-auto bg-zinc-700 mt-[4rem] ">
      <div className="grid grid-cols-11 gap-1 bg-zinc-700 grid-rows-5 h-auto">
        <div className="col-span-5 bg-[#fcc151] row-span-5 grid grid-cols-1 grid-rows-1 ">
          <div className="">
            <div className="bg-[url('tarasan.jpg')] h-full w-full bg-cover bg-center"></div>
          </div>
        </div>
        <div className="col-span-6 bg-zinc-700 row-span-1 flex flex-col justify-center items-center">
          <h1 className="text-[4rem] text-white leading-none font-serif capitalize ">
            Begineer's ? Dont worry
          </h1>
          <h2 className=" mt-10 text-[4rem] text-white leading-none font-serif capitalize ">
            some easy asanas...
          </h2>
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1 h-full w-full   flex items-center justify-center">
          <AsanCard
            heading={"1. Child's Pose (Balasana)"}
            para={
              "This foundational pose can be relaxing and serve as a great reset during a class. If you ever need a second during your flow to regroup, you can always come back to child's pose."
            }
            image={"asan1.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#e98f9f] row-span-1 group">
          <AsanCard
            heading={"2. Downward Facing Dog (Adho Mukha Svanasana)"}
            para={
              "Downward facing dog may be one of the first poses you'll learn in any yoga class, since it is an important part of many yoga practices. It's one of the main poses during sun salutations and something you can return to throughout class, as well."
            }
            image={"asan2.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1 group">
          <AsanCard
            heading={"3. Low Lunge (Anjaneyasana)"}
            para={
              "Another favorite pose of Rayburn's, this one is great for stretching the lower body and opening up the chest."
            }
            image={"asan3.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1 group">
          <AsanCard
            heading={"4. Cobra Pose (Bhujangasana)"}
            para={
              "This pose, also common in sun salutations, is ideal for improving posture as backbends are great for counteracting prolonged sitting."
            }
            image={"asan4.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1">
          <AsanCard
            heading={"5. Chair Pose (Utkatasana)"}
            para={
              "This powerful pose is great for strengthening the legs, arms and core."
            }
            image={"asan5.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1">
          <AsanCard
            heading={"6. Bridge Pose (Setu Bandha Sarvangasana)"}
            para={
              "Another popular backbend, this pose can help improve posture and also relieve lower back pain."
            }
            image={"asan8.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1">
          <AsanCard
            heading={"7. Pigeon Pose (Eka Pada Rajakapotasana)"}
            para={
              "Great for opening the hips, this popular yoga pose targets the lower body and can provide a fantastic stretch. Ease into the movement and only fold forward if you feel stable once in position."
            }
            image={"asan7.jpg"}
          />
        </div>
        <div className="col-span-3 bg-[#34c6cd] row-span-1">
          <AsanCard
            heading={"9. Tree Pose (Vrksasana)"}
            para={
              "Not only does this standing yoga pose help improve your balance and coordination, but it also focuses on posture and alignment. Engage your core to help steady yourself."
            }
            image={"asan9.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Asanas;
