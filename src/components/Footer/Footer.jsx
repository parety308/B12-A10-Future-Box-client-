import React from 'react';
import logo from '../../assets/logo.jpg'
const Footer = () => {
    return (
        <>
            <div className='bg-[#001931] text-[#FFFFFF]'>
                <div className='p-6 flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-2'>
                        <img className='w-15 rounded-full' src={logo} alt="" />
                        <h2 className='text-3xl'>Home Nest</h2>
                    </div>
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <div className='mr-10 flex flex-col gap-5 justify-center items-center'>
                        <h1>Social Links</h1>
                        <div className='flex gap-5'>
                            <img src="https://i.ibb.co.com/dYf5FyP/Frame-1171277687.png" alt="" />
                            <img src="https://i.ibb.co.com/212qnB00/Frame-1171277689.png" alt="" />
                            <img src="https://i.ibb.co.com/MD9jM0xC/Frame-1171277690.png" alt="" />
                        </div>
                    </div>
                </div>
                <aside className="footer sm:footer-horizontal footer-center  text-white p-4 shadow:lg text-xl">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by  HomeNest</p>
                </aside>
            </div>
        </>






    );
};

export default Footer;