import React, { useEffect, useState, useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";

const UpdateProperty = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    // Loaded property data via loader
    const loadedProperty = useLoaderData();

    const [formData, setFormData] = useState({
        propertyName: "",
        description: "",
        category: "",
        price: "",
        location: "",
        propertyImage: "",
    });

    // Pre-fill when data arrives
    useEffect(() => {
        if (loadedProperty) {
            setFormData({
                propertyName: loadedProperty.propertyName,
                description: loadedProperty.description,
                category: loadedProperty.category,
                price: loadedProperty.price,
                location: loadedProperty.location,
                propertyImage: loadedProperty.propertyImage,
            });
        }
    }, [loadedProperty]);

    // Handle change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle update
    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                postedBy: {
                    name: user.displayName,
                    email: user.email,
                },
                postedDate: new Date().toISOString(),
            }),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Property Updated Successfully!",
                    timer: 1500,
                    showConfirmButton: false,
                });

                // Navigate to updated property details page
                navigate(`/property/${id}`);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Update Property</h2>

            <form onSubmit={handleUpdate} className="space-y-4">

                {/* Property Name */}
                <div>
                    <label className="font-semibold">Property Name</label>
                    <input
                        type="text"
                        name="propertyName"
                        value={formData.propertyName}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        rows={3}
                        required
                    ></textarea>
                </div>

                {/* Category */}
                <div>
                    <label className="font-semibold">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    >
                        <option value="Apartment">Apartment</option>
                        <option value="Land">Land</option>
                        <option value="Office">Office</option>
                        <option value="Villa">Villa</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="font-semibold">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                </div>

                {/* Image Link */}
                <div>
                    <label className="font-semibold">Image Link</label>
                    <input
                        type="text"
                        name="propertyImage"
                        value={formData.propertyImage}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                </div>

                {/* Read-only User Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="font-semibold">User Name</label>
                        <input
                            type="text"
                            readOnly
                            value={user.displayName}
                            className="w-full p-3 border rounded-lg bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">User Email</label>
                        <input
                            type="text"
                            readOnly
                            value={user.email}
                            className="w-full p-3 border rounded-lg bg-gray-100"
                        />
                    </div>
                </div>

                {/* Update Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
                >
                    Update Property
                </button>
            </form>
        </div>
    );
};

export default UpdateProperty;
