import React from 'react';
import Banner from '../Banner/Banner';
import LatestProperties from '../LatestProperties/LatestProperties';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import ExploreCategories from '../ExploreCategories/ExploreCategories';

const latestProperties = fetch('http://localhost:3000/recent-items').then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProperties latestProperties={latestProperties}></LatestProperties>
            <WhyChooseUs/>
            <ExploreCategories/>
        </div>
    );
};

export default Home;