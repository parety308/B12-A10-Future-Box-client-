import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyProperties = () => {
    const { user } = use(AuthContext);
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        fetch(`http://localhost:3000?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProperties(data))
            .catch(err => console.log(err));
    }, [user]);



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
                fetch(`http://localhost:3000/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your property has been deleted.", "success");
                        setProperties(properties.filter(p => p._id !== id));
                    });
            }
        });
    };

    const handleUpdate = (id) => {
        navigate(`/items/${id}`);
    };

    const handleViewDetails = (id) => {
        navigate(`/items/${id}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {properties.length === 0 && <p>No properties found!</p>}
            {properties.map((property) => (
                <div key={property._id} className="card bg-white shadow-lg p-4 rounded-lg">
                    <img src={property.propertyImage} alt={property.propertyName} className="h-48 w-full object-cover rounded-md" />
                    <h2 className="text-xl font-bold mt-2">{property.propertyName}</h2>
                    <p>Category: {property.category}</p>
                    <p>Price: {property.price}</p>
                    <p>Location: {property.location}</p>
                    <p>Posted Date: {new Date(property.postedDate).toLocaleDateString()}</p>
                    <div className="flex justify-between mt-4">
                        <button onClick={() => handleUpdate(property._id)} className="btn btn-sm bg-blue-500 text-white">Update</button>
                        <button onClick={() => handleDelete(property._id)} className="btn btn-sm bg-red-500 text-white">Delete</button>
                        <button onClick={() => handleViewDetails(property._id)} className="btn btn-sm bg-gray-500 text-white">View</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyProperties;