"use client";

import { useState } from "react";
import Image from "next/image";
import { newDropDetails } from "@/constant";
import DemoOne from "../../../../public/product-page-demo-1.png";
import DemoTwo from "../../../../public/product-page-demo-2.png";
import DemoThree from "../../../../public/product-page-demo-3.png";
import DemoFour from "../../../../public/product-page-demo-4.png";

import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/features/cartSlice";
import toast from "react-hot-toast";

export default function ProductPage({ params }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const colors = [
    { name: "Shadow Navy", colorCode: "#323232" },
    { name: "Army Green", colorCode: "#3C6E47" },
  ];

  const dispatch = useDispatch();
  console.log("Params:", params.id);

  return (
    <>
      {newDropDetails.map(
        (product) =>
          params.id == product.id && (
            <div key={product.id} className="bg-[#E7E7E3] p-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Single Large Image */}
                <div className="flex justify-center items-center">
                  <div className="w-full h-full">
                    <Image
                      src={product.productImage} // Replace with your image path
                      alt="Product Image"
                      layout="responsive"
                      width={700}
                      height={600}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg">
                  <h1 className="text-2xl font-bold text-[#232321]">
                    {product.productName}
                  </h1>
                  <p className="text-xl text-[#4A69E2] font-bold">
                    ${product.price}
                  </p>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold">COLOR</h3>
                    <div className="flex space-x-2 mt-2">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                            selectedColor === index
                              ? "outline outline-black outline-offset-1"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.colorCode }}
                          onClick={() => setSelectedColor(index)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold">SIZE</h3>
                    <div className="grid grid-cols-10 gap-2 mt-2">
                      {sizes.map((size, index) => (
                        <button
                          key={index}
                          className={`border rounded-md p-2 text-center cursor-pointer ${
                            selectedSize === index
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                          onClick={() => setSelectedSize(index)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">SIZE CHART</div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <button
                      className="w-full bg-[#232321] text-white px-4 py-2 rounded-md"
                      onClick={() => {
                        dispatch(
                          addProduct({
                            id: product.id,
                            name: product.productName,
                            price: product.price,
                            quantity: 1,
                            productImg: product.productImage,
                          })
                        );
                        toast.success("Item Added");
                      }}
                    >
                      ADD TO CART
                    </button>
                    <button className="w-full bg-[#4A69E2] text-white px-4 py-2 rounded-md">
                      BUY IT NOW
                    </button>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-[#232321]">
                      ABOUT THE PRODUCT
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Shadow Navy / Army Green
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                      <li>
                        This product is excluded from all promotional discounts
                        and offers.
                      </li>
                      <li>
                        Pay over time in interest-free installments with Affirm,
                        Klarna or Afterpay.
                      </li>
                      <li>
                        Join adiClub & get immediate standard free shipping,
                        returns, & exchanges.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}
