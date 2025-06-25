import Reviewcard from "./card";
import Marquee from "react-fast-marquee";

export default function Reviews({ reviews }) {
  return (
    <>
      <div className="mb-4 ">
        <div>
          <div className="text-white flex justify-center mb-4"> </div>
        </div>

        <Marquee gradient={false}>
          <div className="flex px-5">
            {reviews.map((review) => {
              return (
                <Reviewcard
                  className="px-4 py-3"
                  key={review.title}
                  title={review.title}
                  stars={review.stars}
                  name={review.name}
                  review={review.review}
                  img={review.reviewimg}
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </>
  );
}

// <Reviewcard
//   className="px-4 py-3"
//   key={review.CustomerReviews.title}
//   title={review.CustomerReviews.title}
//   stars={review.CustomerReviews.reviewStars}
//   Name={review.CustomerReviews.customerName}
//   Review={review.CustomerReviews.comment}
// />;

//   {
//     reviews.map((review) => {
//       return (
//         <Reviewcard
//           className="px-4 py-3"
//           title={"review"}
//           stars={5}
//           Name={"review.CustomerReviews.customerName"}
//           Review={"review.CustomerReviews.commentreview.CustomerReviews.commentreview.CustomerReviews.comment"}
//         />
//       );
//     });
//   }
