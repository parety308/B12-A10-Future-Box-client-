import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center px-4">
                 <h1 className="text-3xl font-semibold  mb-5">Why Choose HomeNest?</h1>
                <p className="text-gray-600 mb-10">
                    Find your dream home with a platform built for trust, transparency, and convenience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                        <p className="text-gray-600">
                            All properties are checked for authenticity before they go live.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
                        <p className="text-gray-600">
                            Easily find properties by filtering location, price, and category.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                        <p className="text-gray-600">
                            Your account and personal data are protected with secure authentication.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">User Ratings</h3>
                        <p className="text-gray-600">
                            Make better decisions with ratings and reviews from real users.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
                        <p className="text-gray-600">
                            No middleman — contact owners directly and save time and cost.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h3 className="text-xl font-semibold mb-2">Easy Posting</h3>
                        <p className="text-gray-600">
                            Property owners can add and manage listings from a simple dashboard.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
