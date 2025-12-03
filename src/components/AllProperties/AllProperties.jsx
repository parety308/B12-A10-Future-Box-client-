import React, { useEffect, useState } from 'react';
import LatestProperty from '../LatestProperties/LatestProperty';

const AllProperties = () => {
    const [allProperties, setAllProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all properties from server
    const fetchProperties = () => {
        setLoading(true);
        fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(data => {
                setAllProperties(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <div className='lg:w-11/12 md:w-11/12 w-6/12 mx-auto my-5'>
            <h1 className="text-4xl font-semibold text-center my-8">
                All <span className='text-[#9F62F2]'>Products</span>
            </h1>

            {loading ? (
                <p className="text-center text-gray-500">Loading properties...</p>
            ) : allProperties.length === 0 ? (
                <p className="text-center text-gray-500">No properties found.</p>
            ) : (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    {allProperties.map(property => (
                        <LatestProperty
                            property={property}
                            key={property._id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProperties;
