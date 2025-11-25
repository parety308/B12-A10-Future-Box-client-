import React from 'react';
import Banner from '../Banner/Banner';
import LatestProperties from '../LatestProperties/LatestProperties';

const latestProperties = fetch('https://assignment-10-server-ten-dun.vercel.app/recent-items').then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProperties latestProperties={latestProperties}></LatestProperties>
        </div>
    );
};

export default Home;