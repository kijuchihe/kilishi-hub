import Button from "@/components/common/Button";
import Section from "@/components/common/Section";

const Featured = () => {
  return (
    <Section h="h-fit">
      <div className="bg-dark-100 text-gray-100 py-8 h-full">
        <h3 className="text-center text-reddish text-3xl">Shop Now</h3>
        <h2 className="text-center text-5xl py-4">Featured Products</h2>
        {/* Products */}
        <div className="flex  gap-20 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex w-full items-center justify-center py-8">
          <Button type="button" variant="filled">
            View All
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Featured;

export const ProductCard = () => {
  return (
    <figure className="flex flex-col min-h-[450px] h-fit rounded-tl-2xl rounded-tr-2xl rounded-b-md min-w-60 w-80 bg-dark-400">
      <img
        src="/hero-bg.png"
        alt=""
        className="flex-1 w-full min-h-[70%] h-[70%] max-h-[70%] rounded-tl-2xl rounded-tr-2xl"
      />
      <figcaption className="max-h-[30%] text-center py-4 flex  flex-col items-center gap-y-2">
        <h4 className="text-3xl">Classic Kilishi pack</h4>
        <p className="text-3xl font-light">$ 40.00</p>
        <Button type="button" variant="outlined">
          Add to cart
        </Button>
      </figcaption>
    </figure>
  );
};
