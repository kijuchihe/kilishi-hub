import About from "@/components/home/About";
import Featured from "@/components/home/Featured";
import FindProducts from "@/components/home/FindProducts";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <FindProducts />
    </>
  );
}
