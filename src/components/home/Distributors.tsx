import React from "react";
import Section from "../common/Section";
import Button from "../common/Button";

const Distributors = () => {
  return (
    <Section h="h-fit" className="">
      <div className="flex flex-col items-center gap-8 bg-dark-100 py-12 text-white">
        <h3 className="text-3xl">Meet our team of Distributors</h3>
        <p className="text-sm w-[80%] lg:w-[60%] font-light text-center">
          My efforts have  in significant growth for my clients. From
          2020- 2023. I led and participated in campaigns that produced over
          $70m in funcding & sales, over 5 million active users/customers and
          over 30 million impressions across multiple campaigns
        </p>
        <div>
          <div></div>Carousel for distributors
        </div>
        <div>
          <Button variant="filled">Become a Distributor</Button>
        </div>
      </div>
    </Section>
  );
};

export default Distributors;
