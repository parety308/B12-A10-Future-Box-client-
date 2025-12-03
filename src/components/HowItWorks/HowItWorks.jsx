import React from "react";
import { Search, PlusCircle, CheckCircle } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            title: "1. Browse Properties",
            description:
                "Search thousands of verified listings by location, budget, and category.",
            icon: <Search className="w-12 h-12 text-blue-600" />,
        },
        {
            title: "2. Post Your Property",
            description:
                "Owners can easily list their rental or sale properties in minutes.",
            icon: <PlusCircle className="w-12 h-12 text-green-600" />,
        },
        {
            title: "3. Connect & Close Deal",
            description:
                "Contact owners directly, schedule visits, and finalize your decision.",
            icon: <CheckCircle className="w-12 h-12 text-purple-600" />,
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-5">How It Works</h2>
                <p className="text-gray-600 text-center mb-10">
                    Getting your dream property is easier than ever with HomeNest.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
