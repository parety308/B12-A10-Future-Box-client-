import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <h1>Root</h1>
            <Outlet/>
        </div>
    );
};

export default Root;