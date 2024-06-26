import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductCard({
  productName,
  productImgURL,
  price,
  productId,
}) {
  return (
    <div className="bg-[#E7E7E3] p-4 rounded-lg max-w-xs mx-auto lg:mb-20">
      <div className="relative bg-white p-2 rounded-3xl">
        <div className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          New
        </div>
        <Image
          src={productImgURL}
          alt="Adidas 4DFWD x Parley Running Shoes"
          className="w-full h-auto object-contain"
        />
      </div>
      <h2 className="mt-4 text-lg font-bold text-center text-[#232321]">
        {productName}
      </h2>
      <div className="mt-4 text-center">
        <Link href={`/product-page/${productId}`}>
          <Button className="bg-[#232321] text-white px-4 py-2 rounded-lg w-full">
            VIEW PRODUCT - <span className="text-[#FFA52F]">${price}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
