import { Link, useLoaderData, useNavigate } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const PropertyDetails = () => {
    const property = useLoaderData();
    const navigate = useNavigate();

    const {
        propertyName,
        description,
        price,
        location,
        category,
        propertyImage,
        postedDate,
        postedBy: { name, email, profilePhoto }
    } = property;

    const [rating, setRating] = useState(3); // default rating
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useState([]);   // local reviews: optional

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            rating,
            reviewText,
            date: new Date().toLocaleString()
        };

        setReviews([...reviews, newReview]);   // add review locally

        setReviewText(""); // reset form
        setRating(0);
    }

    return (
        <div className=" w-10/12 mx-auto my-5 ">
            <h1 className=' text-center text-5xl my-15 font-bold text-green-900'>
                HomeNest - A Real Estate Listing Portal
            </h1>

            {/* Property Image + Info */}
            <div className="w-10/12 max-h-screen mx-auto my-5 ">
                <figure>
                    <img
                        src={propertyImage}
                        alt={propertyName}
                        className='h-100 w-full rounded-xl shadow-sm border-gray-300 mb-2'
                    />
                </figure>

                <div className="card-body text-xl shadow-sm border-gray-300 rounded-xl ">
                    <h2 className="card-title text-2xl font-bold">Property Name : {propertyName}</h2>

                    <p><span className='font-semibold'>Provided By : </span>{name}</p>
                    <p><span className='font-semibold'>Category : </span>{category}</p>
                    <p><span className='font-semibold'>Location : </span>{location}</p>
                    <p><span className='font-semibold'>Posted Date : </span>{postedDate}</p>
                    <p><span className='font-semibold'>Description : </span>{description}</p>
                    <p><span className='font-semibold'>Price : </span>{price} BDT</p>

                    <div className="card-actions justify-between">
                        <Link onClick={() => navigate(-1)} className="btn btn-primary">Go Back</Link>
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>

            {/*Ratings and Reviews Section */}
            <div className="w-10/12 mx-auto my-10 p-5 border rounded-xl shadow">
                <h2 className="text-3xl font-bold mb-4 text-green-700">
                     Ratings & Reviews
                </h2>

                {/* Rating Form */}
                <form onSubmit={handleReviewSubmit} className="mb-8">
                    <label className="font-semibold text-xl">Your Rating:</label>
                    <div className="my-3">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                    </div>

                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Write your review..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    ></textarea>

                    <button className="btn btn-success mt-3">
                        Submit Review
                    </button>
                </form>

                {/* Display Reviews */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3">User Reviews:</h3>

                    {reviews.length === 0 && (
                        <p className="text-gray-500">No reviews yet. Be the first!</p>
                    )}

                    {reviews.map((rev, idx) => (
                        <div key={idx} className="p-3 border rounded-lg mb-3">
                            <Rating style={{ maxWidth: 120 }} value={rev.rating} readOnly />
                            <p className="mt-2">{rev.reviewText}</p>
                            <p className="text-sm text-gray-500">Posted: {rev.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
