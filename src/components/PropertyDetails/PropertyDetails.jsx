import { Link, useLoaderData } from "react-router";

const PropertyDetails = () => {
    const property = useLoaderData();
    const { propertyName, description, price, location, category, propertyImage, postedDate, postedBy: { name, email, profilePhoto } } = property;
    return (
        <div className=" w-10/12 mx-auto my-5 ">
            <h1 className=' text-center text-5xl my-15 font-bold text-green-900'>HomeNest - A Real Estate Listing Portal</h1>
            <div className="w-10/12 max-h-screen mx-auto my-5 ">
                <figure>
                    <img
                        src={propertyImage}
                        alt={propertyName}
                        className='h-100 w-full rounded-xl shadow-sm border-gray-300 mb-2' />
                </figure>
                <div className="card-body text-xl shadow-sm border-gray-300 rounded-xl ">
                    <h2 className="card-title text-2xl font-bold">Property Name : {propertyName}</h2>
                    <p><span className='font-semibold'>Provide By : </span>{name}</p>
                    <p><span className='font-semibold'>Category : </span>{category}</p>
                    <p><span className='font-semibold'>Location : </span>{location}</p>
                    <p><span className='font-semibold'>PostedDate : </span>{postedDate}</p>
                    <p><span className='font-semibold'>Description : </span>{description}</p>
                    <p><span className='font-semibold'>Price : </span>{price} BDT</p>
                    <div className="card-actions justify-between">
                        <Link onClick={() => { navigate(-1) }} className="btn btn-primary">Go Back</Link>
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PropertyDetails;