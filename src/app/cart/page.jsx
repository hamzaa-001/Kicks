import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import productImg from "../../../public/product-img-1.png";

const page = () => {
  return (
    <div>
      <div className="bg-[#E7E7E3] p-8">
        <div className="max-w-7xl mx-auto">
          <div className=" p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#232321]">
              Saving to celebrate
            </h2>
            <p className="mt-2 text-sm">
              Enjoy up to 60% off thousands of styles during the End of Year
              sale - while supplies last. No code needed. Join us, or Sign-in.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#232321]">Your Bag</h2>
              <p className="mt-2 text-sm text-gray-600">
                Items in your bag not reserved - check out now to make them
                yours.
              </p>
              <div className="mt-4 flex items-center border-b pb-4">
                <div className="w-32 h-32">
                  <Image
                    src={productImg}
                    alt="Dropset Trainer Shoes"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold text-[#232321]">
                    DROPSET TRAINER SHOES
                  </h3>
                  <p className="text-sm text-gray-600">
                    Men&apos;s Road Running Shoes
                  </p>
                  <p className="text-sm text-gray-600">
                    Enamel Blue/ University White
                  </p>
                  <div className="flex items-center mt-2">
                    <label className="text-sm mr-2">Size:</label>
                    <select className="border px-2 py-1 rounded-md">
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="text-sm mr-2">Quantity:</label>
                    <select className="border px-2 py-1 rounded-md">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">$130.00</p>
                  <button className="text-[#232321] mt-2">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>

            <div className=" p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#232321]">
                Order Summary
              </h2>
              <div className="mt-4 flex justify-between text-sm">
                <span>1 ITEM</span>
                <span>$130.00</span>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span>Delivery</span>
                <span>$6.99</span>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span>Sales Tax</span>
                <span>-</span>
              </div>
              <div className="mt-4 flex justify-between text-lg font-bold text-[#232321]">
                <span>Total</span>
                <span>$136.99</span>
              </div>
              <button className="mt-4 w-full bg-[#232321] text-white px-4 py-2 rounded-md">
                CHECKOUT
              </button>
              <div className="mt-4 text-sm underline cursor-pointer">
                Use a promo code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
