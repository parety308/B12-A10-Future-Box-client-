import { NavLink } from "react-router";

const LatestProperty = ({ property }) => {
    return (
        <div className="card bg-base-100 border-gray-300 border shadow-sm flex flex-col">
            <figure className="p-2">
                <img className="rounded-xl w-full h-48 object-cover"
                    src={property.propertyImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center gap-2">
                    <h2 className="text-xl font-semibold">{property.propertyName}</h2>
                    <h2 className="bg-amber-200 rounded-xl w-fit p-1">{property.category} </h2>
                </div>
                <p className="">{property.description}</p>
                <p className=" text-lg"><span className="font-semibold">Location : </span>{property.location}</p>
                <p className=" text-lg"><span className="font-semibold">Price : </span>{property.price} BDT</p>
                <NavLink to={`/property/${property._id}`} className="btn bg-base-100 border-[#632EE3] text-[#632EE3]">View Details</NavLink>
            </div>
        </div>
    );
};

export default LatestProperty;