import { Link, useLoaderData, useNavigate } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const PropertyDetails = () => {
    const property = useLoaderData();
    const navigate = useNavigate();
    const { user, reviews, setReviews } = useContext(AuthContext);

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

    const [rating, setRating] = useState(3);
    const [reviewText, setReviewText] = useState("");

    // submit review
    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            propertyId: property._id,
            reviewerName: user.displayName,
            reviewerEmail: user.email,
            reviewerPhoto: user.photoURL,
            propertyName,
            thumbnail: propertyImage,
            rating,
            reviewText,
            date: new Date().toLocaleString()
        };

        setReviews([...reviews, newReview]);

        setReviewText("");
        setRating(0);
    };

    // filter reviews related to this property only
    const propertyReviews = reviews.filter(
        (rev) => rev.propertyId === property._id
    );

    return (
        <div className=" w-10/12 mx-auto my-5 ">
            <h1 className=' text-center text-5xl my-15 font-bold text-green-900'>
                HomeNest - A Real Estate Listing Portal
            </h1>

            {/* PROPERTY IMAGE + INFO */}
            <div className="w-10/12 mx-auto my-5 ">
                <figure>
                    <img
                        src={propertyImage}
                        alt={propertyName}
                        className='h-100 w-full rounded-xl shadow mb-2'
                    />
                </figure>

                <div className="card-body text-xl shadow rounded-xl ">
                    <h2 className="card-title text-2xl font-bold">Property Name: {propertyName}</h2>

                    <p><span className='font-semibold'>Provided By:</span> {name}</p>
                    <p><span className='font-semibold'>Category:</span> {category}</p>
                    <p><span className='font-semibold'>Location:</span> {location}</p>
                    <p><span className='font-semibold'>Posted Date:</span> {postedDate}</p>
                    <p><span className='font-semibold'>Description:</span> {description}</p>
                    <p><span className='font-semibold'>Price:</span> {price} BDT</p>

                    <div className="card-actions justify-between">
                        <Link onClick={() => navigate(-1)} className="btn btn-primary">Go Back</Link>
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>

            {/* RATINGS SECTION */}
            <div className="w-10/12 mx-auto my-10 p-5 border rounded-xl shadow">
                <h2 className="text-3xl font-bold mb-4 text-green-700">
                    Ratings & Reviews
                </h2>

                {/* rating form */}
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

                    <button type="submit" className="btn btn-success mt-3">
                        Submit Review
                    </button>
                </form>

                {/* DISPLAY REVIEWS */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3">User Reviews:</h3>

                    {propertyReviews.length === 0 && (
                        <p className="text-gray-500">No reviews yet. Be the first!</p>
                    )}

                    {propertyReviews.map((rev, idx) => (
                        <div key={idx} className="p-4 border rounded-lg mb-4 flex gap-4">
                            
                            {/* property thumbnail */}
                            <img
                                src={rev.thumbnail}
                                className="w-24 h-20 object-cover rounded"
                                alt=""
                            />

                            <div>
                                <h4 className="font-bold">{rev.propertyName}</h4>

                                {/* reviewer name */}
                                <p className="text-sm text-gray-600">
                                    Reviewer: {rev.reviewerName}
                                </p>

                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={rev.rating}
                                    readOnly
                                />

                                <p className="mt-2">{rev.reviewText}</p>
                                <p className="text-sm text-gray-500">Posted: {rev.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
