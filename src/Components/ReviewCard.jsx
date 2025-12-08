import React from "react";

const ReviewCard = ({ review }) => {
  const { user_photoURL, userName, review: reviewText, ratings, date } = review;

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl shadow-xl bg-white border border-gray-200 flex flex-col gap-4">
      {/* Quote Icon */}
      <div className="text-cyan-500 text-4xl">❝</div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{reviewText}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500 font-semibold">
        ⭐ <span className="text-gray-800 ml-1">{ratings}/5</span>
      </div>

      <div className="divider my-1"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <img
            src={user_photoURL}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">{userName}</h3>

          {/* Date Format */}
          <p className="text-gray-500 text-sm">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
