import { Button } from "@/components/ui/button";
import { reviewDetails } from "@/constant";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="bg-[#E7E7E3] pt-10">
      <div className="container py-10 flex justify-between items-center ">
        <h1 className="uppercase lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#232321]">
          Reviews
        </h1>
        <Button variant="blue">SEE ALL</Button>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {reviewDetails.map((review) => (
          <ReviewCard
            key={review.id}
            userImg={review.reviewUser}
            reviewImg={review.reviewImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
