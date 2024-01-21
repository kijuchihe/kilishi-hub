import React from "react";
import Section from "../common/Section";

const Testimonials = () => {
  return (
    <Section h="h-fit">
      <div className="flex flex-col gap-8 bg-dark-100 text-white py-16 ">
        <h3 className="text-center text-3xl font-bold text-gray-300">
          Our customers think we are{" "}
          <span className="text-reddish">EXCELLENT</span>
        </h3>
        <div className="font-extrabold text-center text-3xl text-gray-300">
          4.7
        </div>
        <div className="bg-white w-[70%] text-gray-700 text-2xl text-center self-center py-8 px-4 rounded-lg font-medium">
          <p className="mb-8">
            "Celebrate WINS often. Business is tough, so celebrating wins no
            matter how small allows you to stay motivated"
          </p>
          <p className="font-bold text-black text-center ">
            <strong>- Chidimma</strong>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
