import About from "@/components/home/About";
import Distributors from "@/components/home/Distributors";
import Featured from "@/components/home/Featured";
import FindProducts from "@/components/home/FindProducts";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <FindProducts />
      <Testimonials />
      <Distributors />
    </>
  );
}
