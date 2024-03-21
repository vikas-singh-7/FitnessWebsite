import React from "react";
import AsanCard from "../AsanCard";
import { useEffect } from "react";

const Asanas = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <div className="bg-zinc-700 mt-[4rem] ">
      <div className="grid grid-cols-11 gap-1 bg-zinc-700 grid-rows-5">
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
        <div className="col-span-3 bg-[#34c6cd] row-span-1 h-full w-full    flex items-center justify-center">
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
      <div className="h-full flex p-2 gap-2  ">
        <div className="h-[80vh] w-[40%] rounded-md bg-[#697A21]">
          <div className="content p-4 flex flex-col ">
            <h2 className="text-[4rem] text-white font-serif">
              What is Yoga ?{" "}
            </h2>
            <h3 className="text-[4rem] text-white font-serif">
              And Why Yoga ?
            </h3>
          </div>
          <div className="h-[50vh] overflow-hidden rounded-md">
            <div className="h-full w-full hover:scale-105 transition-all duration-200 ease-linear">
              <img src="ancient3.avif" alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-[60%] rounded-md bg-[#3E363F] text-white">
          <div className="h-full w-full grid grid-rows-10">
            <div className="row-span-6  flex justify-center items-center">
              <h2 className="text-[2rem] font-serif p-1">
                Yoga is a physical, mental and spiritual practice that
                originated in ancient India. First codified by the sage
                Patanjali in his Yoga Sutras around 400 C.E, the practice was in
                fact handed down from teacher to student long before this text
                arose. Traditionally, this was a one-to-one transmission, but
                since yoga became popular in the West in the 20th century, group
                classes have become the norm.
              </h2>
            </div>
            <div className="row-span-4  p-2">
              <h2 className="text-[2rem]">
                “The help which tends to make us spiritually strong is the
                highest help, next to it comes intellectual help and after that
                comes physical help.”
              </h2>
              <p className="text-xl">
                ― Swami Vivekananda, Karma Yoga: the Yoga of Action
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asanas;
