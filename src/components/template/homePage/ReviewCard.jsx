import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ userImg, reviewImg }) => {
  return (
    <div>
      <div className="bg-[#E7E7E3] rounded-2xl max-w-xs mx-auto mb-20">
        <div className="bg-white p-4 rounded-t-2xl">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src={userImg}
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-semibold">Good Quality</h3>
              <p className="text-xs text-gray-500">
                I highly recommend shopping from kicks
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-gray-600 ml-2">5.0</p>
          </div>
        </div>
        <div>
          <Image
            src={reviewImg}
            alt="Product"
            className="w-full h-auto object-cover rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
