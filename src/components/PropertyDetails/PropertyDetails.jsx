import { Link, useLoaderData, useNavigate } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const PropertyDetails = () => {
    const property = useLoaderData();
    const navigate = useNavigate();
    const { user, reviews, setReviews } = useContext(AuthContext);

    const [rating, setRating] = useState(3);
    const [reviewText, setReviewText] = useState("");

    const {
        _id,
        propertyName,
        description,
        price,
        location,
        category,
        propertyImage,
        postedDate,
        postedBy = {}
    } = property;

    const { name } = postedBy;

    //   HANDLE REVIEW SUBMIT
    const handleReviewSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Login Required",
                text: "You must be logged in to post a review.",
            });
            return;
        }

        if (rating <= 0) {
            Swal.fire({
                icon: "error",
                title: "Rating Missing",
                text: "Please give a rating before submitting.",
            });
            return;
        }

        const newReview = {
            propertyId: _id,
            propertyName,
            propertyImage,
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            rating,
            reviewText,
            date: new Date().toLocaleString(),
        };

        // --------------------------
        //   SEND TO SERVER
        // --------------------------
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // Update UI instantly
                    setReviews([...reviews, newReview]);

                    Swal.fire({
                        icon: "success",
                        title: "Review Submitted!",
                        text: "Thanks for sharing your feedback.",
                        timer: 1500,
                        showConfirmButton: false,
                    });

                    setReviewText("");
                    setRating(3);
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: "Unable to submit review. Try again later.",
                });
                console.log(err);
            });
    };

    // --------------------------
    //   FILTER REVIEWS
    const propertyReviews = reviews.filter(
        (rev) => rev.propertyId === _id
    );

    return (
        <div className=" w-10/12 mx-auto my-5 ">
            <h1 className=' text-center text-5xl my-15 font-bold text-green-900'>
                HomeNest - A Real Estate Listing Portal
            </h1>

            {/* PROPERTY INFO */}
            <div className="w-10/12 mx-auto my-5 ">
                <figure>
                    <img
                        src={propertyImage}
                        alt={propertyName}
                        className='h-100 w-full rounded-xl shadow mb-2'
                    />
                </figure>

                <div className="card-body text-xl shadow rounded-xl ">
                    <h2 className="card-title text-2xl font-bold">
                        Property Name: {propertyName}
                    </h2>

                    <p><span className='font-semibold'>Provided By:</span> {name}</p>
                    <p><span className='font-semibold'>Category:</span> {category}</p>
                    <p><span className='font-semibold'>Location:</span> {location}</p>
                    <p><span className='font-semibold'>Posted Date:</span> {postedDate}</p>
                    <p><span className='font-semibold'>Description:</span> {description}</p>
                    <p><span className='font-semibold'>Price:</span> {price} BDT</p>

                    <div className="card-actions justify-between">
                        <Link 
                            onClick={() => navigate(-1)} 
                            className="btn btn-primary"
                        >
                            Go Back
                        </Link>
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>

            {/* RATINGS SECTION */}
            <div className="w-10/12 mx-auto my-10 p-5 border rounded-xl shadow">
                <h2 className="text-3xl font-bold mb-4 text-green-700">
                    Ratings & Reviews
                </h2>

                {/* REVIEW FORM */}
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

                {/* REVIEW LIST */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3">User Reviews:</h3>

                    {propertyReviews.length === 0 && (
                        <p className="text-gray-500">No reviews yet. Be the first!</p>
                    )}

                    {propertyReviews.map((rev, idx) => (
                        <div key={idx} className="p-4 border rounded-lg mb-4 flex gap-4">

                            <img
                                src={rev.propertyImage}
                                className="w-24 h-20 object-cover rounded"
                                alt=""
                            />

                            <div>
                                <h4 className="font-bold">{rev.propertyName}</h4>

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
