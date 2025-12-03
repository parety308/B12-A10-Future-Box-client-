import React from "react";
import { Home, Building2, Landmark, Warehouse } from "lucide-react";

const ExploreCategories = () => {
    const categories = [
        {
            title: "Apartments",
            description: "Modern and well-connected flats perfect for family living.",
            icon: <Building2 className="w-10 h-10 text-blue-600" />,
        },
        {
            title: "Luxury Villas",
            description: "Premium villas for those who love privacy and comfort.",
            icon: <Home className="w-10 h-10 text-green-600" />,
        },
        {
            title: "Commercial Spaces",
            description: "Offices and shops located in prime business areas.",
            icon: <Landmark className="w-10 h-10 text-yellow-600" />,
        },
        {
            title: "Warehouses",
            description: "Large and secure spaces suitable for storage & industry.",
            icon: <Warehouse className="w-10 h-10 text-purple-600" />,
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-5">Explore Property Categories</h2>
                <p className="text-gray-600 text-center mb-10">
                    Browse properties based on your needs and discover the perfect match.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 shadow rounded-xl text-center hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">{cat.icon}</div>
                            <h3 className="text-xl font-semibold">{cat.title}</h3>
                            <p className="text-gray-600 mt-2">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreCategories;
