import React, { use } from 'react';
import LatestProperty from '../LatestProperties/LatestProperty';

const allPropertiesPromise= fetch('http://localhost:3000/items').then(res => res.json());
const AllProperties = () => {
    const allProperties= use(allPropertiesPromise);
    return (
           <div className='lg:w-11/12 md:w-11/12  w-6/12 mx-auto my-5'>
     <h1 className="text-4xl font-semibold text-center my-8">All<span className='text-[#9F62F2]'>  Products</span></h1>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 '>
            {
                allProperties.map(property => <LatestProperty property={property} key={property._id}></LatestProperty>)
            }
            </div>
        </div>
    );
};

export default AllProperties;