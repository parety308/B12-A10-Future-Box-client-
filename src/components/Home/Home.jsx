import React from 'react';
import Banner from '../Banner/Banner';
import LatestProperties from '../LatestProperties/LatestProperties';

const latestProperties= fetch('http://localhost:3000/recent-items').then(res => res.json());
const Home = () => {
    return (
        <div>
            <h1 className="text-4xl">Home</h1>
            <Banner></Banner>
            <LatestProperties latestProperties={latestProperties}></LatestProperties>
        </div>
    );
};

export default Home;