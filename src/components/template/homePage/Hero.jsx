import HeroImage from "../../../../public/hero-img.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-[#E7E7E3]">
      <h1 className="text-center text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[10rem] font-bold">
        DO IT <span className="text-[#4A69E2]">RIGHT</span>
      </h1>
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4 text-center z-10">
              <div className="space-y-2">
                <h1 className="absolute text-2xl sm:text-4xl md:text-4xl lg:text-2xl xl:text-7xl font-bold text-white bottom-24 sm:bottom-24 md:bottom-32 left-4 lg:bottom-48  sm:left-8 md:left-16">
                  NIKE AIR MAX
                </h1>
                <p className="absolute text-xs sm:text-sm md:text-lg lg:text-xl xl:text-xl bottom-16 sm:bottom-16 md:bottom-16 lg:bottom-24 xl:bottom-32 left-4 sm:left-8 md:left-12 lg:left-16 text-[#FAFAFA] max-w-[200px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[400px] dark:text-gray-400 text-left">
                  Nike introducing the new air max for everyone&apos;s co mfort
                </p>
                <Button
                  variant="blue"
                  className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-16 left-4 sm:left-8 md:left-12 lg:left-16 px-2 sm:px-3 md:px-4"
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <Image
              src={HeroImage}
              className="w-full h-full object-cover"
              alt="hero-Img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
