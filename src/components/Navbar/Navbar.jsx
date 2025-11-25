import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut, setUser } = use(AuthContext);
    const links = <>
        <li className='text-lg font-semibold'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg font-semibold'><NavLink to='allProperties'>All Properties</NavLink></li>
        <li className='text-lg font-semibold'><NavLink to='addProperties'>Add Properties</NavLink></li>
        <li className='text-lg font-semibold'><NavLink to='myProperties'>My Properties</NavLink></li>
        <li className='text-lg font-semibold'><NavLink to='myRatings'>My Ratings</NavLink></li>
    </>
    const handlelogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signed Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-green-900 font-bold"><img src="https://i.ibb.co.com/Y72Kcc9g/image.png" alt=""  className='w-12 h-12 rounded-full'/><NavLink to='/'>HomeNest</NavLink> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user ? <div className='flex justify-center items-center gap-2'>  <div className="dropdown dropdown-  ">
                        <img tabIndex={0} role='button' className='w-10 rounded-full h-10' src={`${user?.photoURL}`} alt="" />
                        <ul tabIndex="-1" className="dropdown-content menu  z-1 w-52 p-2 ">
                            <li className='font-semibold text-xl'>{user.displayName}</li>
                        </ul></div> <button onClick={handlelogOut} className={`btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white font-semibold`}> Signout</button> </div> :
                        <div className='flex gap-4'><NavLink to='/login' className="btn  border-[#9F62F2] text-xl font-semibold">Login</NavLink>
                            <NavLink to='/signup' className={`btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white font-semibold`}>Signup</NavLink></div>
                } </div>
        </div>
    );
};

export default Navbar;