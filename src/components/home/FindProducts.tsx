import React from "react";
import Section from "../common/Section";
import Button from "../common/Button";

const FindProducts = () => {
  return (
    <Section className="" h="h-fit">
      <div className="flex flex-wrap items-center h-full gap-8 p-4 bg-dark-100 text-gray-100">
        <div className="w-full md:w-[45%] border h-[45%] flex flex-col gap-8 rounded-xl p-2 justify-center">
          <h3 className="text-3xl">Choose your best Kilishi Combo!</h3>
          <p className="text-sm">
            Celebrate WINS often. Business is tough, so celebrating wins no
            matter how small allows you to stay motivated. Not only that, but
            when you have a team, this is a greate way to bring morale.
          </p>
          <div className="flex flex-col xl:flex-row gap-2 w-full">
            <form className="flex rounded-full bg-white py-2 flex-1">
              <button type="button">S</button>
              <input
                type="text"
                className="bg-transparent text-black outline-none border-none flex-1 px-2 py-1"
                placeholder="Search"
              />
            </form>
            <Button variant="filled">View all --&gt;</Button>
          </div>
        </div>
        <div className="w-full md:w-[45%] border h-[45%] rounded-xl">
          <img src="/hero-bg.png" alt="" className="rounded-xl w-full h-full content-cover" />
        </div>
        <div className="w-full md:w-[45%] border h-[45%] rounded-xl">
          <img src="/hero-bg.png" alt="" className="rounded-xl w-full h-full" />
        </div>{" "}
        <div className="w-full md:w-[45%] border h-[45%] rounded-xl">
          <img src="/hero-bg.png" alt="" className="rounded-xl w-full h-full" />
        </div>
      </div>
    </Section>
  );
};

export default FindProducts;
