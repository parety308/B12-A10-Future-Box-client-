import React, { use } from 'react';

import { NavLink } from 'react-router';
import LatestProperty from './LatestProperty';

const LatestProperties = ({ latestProperties }) => {
    const properties = use(latestProperties);
    return (
        <div className=' my-5 w-10/12 mx-auto flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-semibold  mb-5">Latest <span className='text-[#9F62F2]'>  Properties</span></h1>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-15'>
                {
                    properties.map(property =><LatestProperty property={property} key={property._id}></LatestProperty>)
                }
            </div>
            <NavLink to='/allProperties' className={`btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white font-semibold mt-2 `}>Show All</NavLink>
        </div>
    );
};

export default LatestProperties;