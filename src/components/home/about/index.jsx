import Section from "@/components/common/Section";

const About = () => {
  return (
    <Section className="bg-dark-100 text-white">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-[100%] md:w-[50%] gap-8">
          <h2 className="text-reddish text-3xl">About</h2>
          <h3 className="text-4xl">
            We produce, package and sell the Spiciest Cow meat
          </h3>
          <p className="text-sm">
            Celebrate WINS often. Business is tough, so celebrating wins no
            matter how small allows you to stay motivated. Not only that, but
            when you have a team, this is a greate way to bring morale.
          </p>
          <button type="button" className="w-fit">
            Learn more
          </button>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <img src="/hero-bg.png" alt="" />
        </div>
      </div>
    </Section>
  );
};

export default About;
