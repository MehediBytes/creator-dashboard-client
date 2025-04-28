import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FaRegUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/UseAdmin';

const Navbar = () => {

    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    const location = useLocation();

    // Handle Logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are now logged out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Problem in log out.", error,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    const navOptions = <>
        <Link to={"/"} className={`p-1 ${location.pathname === '/' ? 'text-amber-500' : ''}`}>Home</Link>
        <Link to={"/aboutus"} className={`p-1 ${location.pathname === '/aboutus' ? 'text-amber-500' : ''}`}>About Us</Link>
        <Link to={"/faq"} className={`p-1 ${location.pathname === '/faq' ? 'text-amber-500' : ''}`}>FAQ</Link>

    </>


    return (
        <nav className='bg-base-100 fixed w-full z-10 top-0 left-0'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <h3 className="text-2xl font-black"><Link to={"/"}>Creator <span className='text-amber-500'>Dashboard</span></Link></h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                            <div>
                                {user && user?.email ?
                                    <img className="w-10 h-10 rounded-full cursor-pointer"
                                        referrerPolicy="no-referrer"
                                        src={user?.photoURL || "None"}
                                        alt={user?.displayName || "User"}
                                        title={user?.displayName || "User"} /> :
                                    <div className='rounded-full text-2xl flex justify-center items-center'><FaRegUserCircle /></div>
                                }
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 space-y-3">
                            {user && isAdmin &&
                                <button className='btn btn-info rounded-full text-white'>
                                    <Link to={"/dashboard/adminHome"}>
                                        Dashboard
                                    </Link>
                                </button>

                            }
                            {user && !isAdmin &&
                                <button className='btn btn-info rounded-full text-white'>
                                    <Link to={"/dashboard/userHome"}>
                                        Dashboard
                                    </Link>
                                </button>
                            }
                            {user && user?.email ?
                                <button onClick={handleLogout} className='btn btn-error rounded-full text-white'>
                                    Logout
                                </button> :
                                <button className='btn btn-info rounded-full text-white'>
                                    <Link to={"/login"}>Login</Link>
                                </button>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;