import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.email) {
            // Fetch reviews of this logged-in user from server
            fetch(`https://assignment-10-server-ten-dun.vercel.app/items?email=${user.email}`)
                .then(res => res.json())
                .then(data => setProperties(data));
        }
    }, [user]);

    // Delete property
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-ten-dun.vercel.app/items/${id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your property has been deleted.", "success");
                        setProperties(properties.filter((p) => p._id !== id));
                    })
                    .catch((err) => console.error("Delete failed:", err));
            }
        });
    };

    const handleUpdate = (id) => {
        navigate(`/updateProperty/${id}`);
    };

    const handleViewDetails = (id) => {
        navigate(`/property/${id}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {properties.length === 0 && (
                <p className="text-center col-span-full">No properties found!</p>
            )}

            {properties.map((property) => (
                <div
                    key={property._id}
                    className="card bg-white shadow-lg p-4 rounded-lg"
                >
                    <img
                        src={property.propertyImage}
                        alt={property.propertyName}
                        className="h-48 w-full object-cover rounded-md"
                    />
                    <h2 className="text-xl font-bold mt-2">{property.propertyName}</h2>
                    <p>Category: {property.category}</p>
                    <p>Price: {property.price}</p>
                    <p>Location: {property.location}</p>
                    <p>Posted By: {property.postedBy?.name}</p>
                    <p>
                        Posted Date:{" "}
                        {property.postedDate
                            ? new Date(property.postedDate).toLocaleDateString()
                            : "N/A"}
                    </p>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => handleUpdate(property._id)}
                            className="btn  bg-blue-500 text-white"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => handleDelete(property._id)}
                            className="btn  bg-red-500 text-white"
                        >
                            Delete
                        </button>
                        <NavLink to={`/property/${property._id}`} className="btn bg-base-100 border-[#632EE3] text-[#632EE3]">View Details</NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyProperties;
