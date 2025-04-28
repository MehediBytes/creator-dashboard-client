import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FaRegUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useAuth();

    // Handle Logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are now loged out",
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

    return (
        <nav className='bg-base-100 fixed w-full z-10 top-0 left-0'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <h3 className="text-2xl font-black"><Link to={"/"}>Creator <span className='text-amber-500'>Dashboard</span></Link></h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
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
                                    <div className='w-10 h-10 flex justify-center items-center'><FaRegUserCircle /></div>
                                }
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36">
                            <li>
                                Dashboard
                            </li>
                            {user && user?.email ?
                                <button onClick={handleLogout} className='btn text-red-500'>
                                    Logout
                                </button> :
                                <li><Link to={"/login"}>Login</Link></li>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;