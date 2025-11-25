import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const MyRatings = () => {
    const { reviews, user } = useContext(AuthContext);

    // Show only the ratings created by the logged-in user
    const myReviews = reviews.filter(
        (rev) => rev.reviewerEmail === user?.email
    );

    return (
        <div className="w-10/12 mx-auto my-10">
            <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
                My Ratings & Reviews
            </h1>

            {myReviews.length === 0 && (
                <p className="text-center text-gray-500 text-lg">
                    You haven’t posted any reviews yet.
                </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myReviews.map((rev, idx) => (
                    <div
                        key={idx}
                        className="border rounded-xl p-4 shadow flex gap-4 bg-white"
                    >
                        {/* Thumbnail */}
                        <img
                            src={rev.propertyImage}
                            alt="Property Thumbnail"
                            className="w-28 h-24 object-cover rounded"
                        />

                        {/* Review Details */}
                        <div className="flex flex-col justify-between">
                            {/* Property Name */}
                            <h2 className="text-xl font-bold text-green-900">
                                {rev.propertyName}
                            </h2>

                            {/* Reviewer */}
                            <p className="text-sm text-gray-600">
                                Reviewer: {rev.reviewerName}
                            </p>

                            {/* Rating Stars */}
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rev.rating}
                                readOnly
                            />

                            {/* Review Text */}
                            <p className="text-gray-700 mt-1">{rev.reviewText}</p>

                            {/* Date */}
                            <p className="text-sm text-gray-500">
                                Posted: {rev.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyRatings;
