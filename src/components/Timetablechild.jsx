import React from "react";

const Timetablechild = () => {
  return (
    <div className="col-span-4 font-semibold bg-zinc-500 row-span-10">
      <div className="heading flex px-10 flex-col items-center justify-center   ">
        <div className="border-2 w-full mt-5 mb-2"></div>

        <ul>
          <li>
            5:30 am - 6:30 am: Wake up, freshen up, and have a healthy
            breakfast.
          </li>
          <li>
            6:30 am - 7:00 am: Review schedule for the day, pack school bag, and
            prepare mentally for the day ahead.
          </li>
          <li>
            7:00 am - 3:00 pm: School hours (including classes, breaks, and
            lunchtime).
          </li>
          <li>
            3:00 pm - 4:00 pm: After-school activities or sports practice.
          </li>
          <li>
            4:00 pm - 5:00 pm: Homework and study session (including review of
            the day's lessons and completion of assignments).
          </li>
          <li>
            5:00 pm - 6:00 pm: Relaxation time (listen to music, read a book,
            engage in a hobby).
          </li>
          <li>6:00 pm - 7:00 pm: Dinner with family.</li>
          <li>
            7:00 pm - 8:30 pm: Additional study time or extracurricular
            activities (tutoring, music lessons, clubs, etc.).
          </li>
          <li>
            8:30 pm - 9:00 pm: Wind down activities (such as taking a warm bath,
            reading a book, or practicing relaxation techniques).
          </li>
          <li>
            9:00 pm: Bedtime routine (brush teeth, prepare clothes for the next
            day, etc.).
          </li>
          <li>9:30 pm: Lights out for sleep.</li>
        </ul>
      </div>
    </div>
  );
};

export default Timetablechild;
