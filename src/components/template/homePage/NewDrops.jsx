import { Button } from "@/components/ui/button";
import { newDropDetails } from "@/constant";
import ProductCard from "./ProductCard";

const NewDrops = () => {
  return (
    <div className="bg-[#E7E7E3]">
      <div className="container py-10 flex justify-between items-center">
        <h1 className="uppercase lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#232321]">
          Don&apos;t miss out <br /> new drops
        </h1>
        <Button variant="blue">SHOP NEW DROPS</Button>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {newDropDetails.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            price={product.price}
            productImgURL={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewDrops;
