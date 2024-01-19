import React from "react";
import Section from "../common/Section";

const FindProducts = () => {
  return (
    <Section className="bg-dark-100 text-gray-100">
      <div className="flex flex-wrap items-center h-full gap-8 p-8">
        <div className="w-full md:w-[45%] border h-[45%]">
          <h3></h3>
          <p className="text-base">
            Celebrate WINS often frrr. Business is tough, so celebrating wins no
            matter how small allows you to stay motivated. Not only that, but
            when you have a team, this is a greate way to bring morale.
          </p>
          <div>
            <form className="flex rounded-full bg-white ">
              <button type="button">S</button>
              <input
                type="text"
                className="bg-transparent outline-none border-none flex-1"
              />
            </form>
            <button>-></button>
          </div>
        </div>
        <div className="w-full md:w-[45%] border h-[45%]">
          <img src="/hero-bg.png" alt="" />
        </div>
        <div className="w-full md:w-[45%] border h-[45%]">
          <img src="/hero-bg.png" alt="" />
        </div>
        <div className="w-full md:w-[45%] border h-[45%]">
          <img src="/hero-bg.png" alt="" className="h-full" />
        </div>
      </div>
    </Section>
  );
};

export default FindProducts;
