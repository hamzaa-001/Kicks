import Image from "next/image";
import categoryImgOne from "../../../../public/category-img-1.png";
import categoryImgTwo from "../../../../public/category-img-2.png";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

const Categories = () => {
  return (
    <div className="bg-[#232321] w-full lg:h-[110vh] sm:h-[100vh] h-[60vh] relative overflow-hidden">
      <div className="container py-10">
        <h1 className="uppercase lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-white mb-10">
          Categories
        </h1>
        <div className="absolute w-full h-[100%] bg-white rounded-3xl flex ">
          <div className="relative w-[50%] h-[100%] bg-[#ECEEF0] flex justify-center items-center rounded-tl-3xl overflow-hidden">
            <Image
              src={categoryImgOne}
              width={500}
              height={500}
              alt="category-img-1"
              className="-mt-32"
            />
            <div>
              <h1 className="hidden lg:block absolute bottom-40 left-20 text-4xl font-bold uppercase text-[#232321]">
                Lifestyle <br /> Shoes
              </h1>
              <Button className="absolute bottom-44 right-20 ">
                <MdArrowOutward />
              </Button>
            </div>
          </div>
          <div className="relative w-[50%] h-[100%] bg-[#F6F6F6] flex justify-center items-center overflow-hidden">
            <Image
              src={categoryImgTwo}
              width={500}
              height={500}
              alt="category-img-1"
              className="-mt-32"
            />
            <div>
              <h1 className="hidden lg:block absolute bottom-40 left-20 text-4xl font-bold uppercase text-[#232321]">
                BasketBall <br /> Shoes
              </h1>
              <Button className="absolute bottom-44 right-20 ">
                <MdArrowOutward />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
