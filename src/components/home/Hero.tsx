import Section from "../common/Section";

const Hero = () => {
  return (
    <Section className="border py-0">
      <div className="h-[calc(100vh-100px)] bg-[url('/hero-bg.png')] bg-cover flex items-center justify-center bg-dark-100 text-gray-100 border">
        <div className="w-[80%] flex flex-col gap-8 items-center">
          <p className="uppercase text-7xl">
            Welcome To The Largest{" "}
            <span className="text-reddish">Kilishi Hub</span> In Nigeria
          </p>
          <p className="text-center text-5xl ">
            Indulge in bold flavors of our premium spiced cow meat
          </p>
          <button className="p-2 border border-white rounded-md w-fit">
            Order Now
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
