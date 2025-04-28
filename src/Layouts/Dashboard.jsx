import { Link, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/UseAdmin';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const location = useLocation();
    const { user, logOut } = useAuth();

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

    return (
        <div className="md:flex container mx-auto">
            {/* dashboard side bar */}
            <div className="md:w-1/4 md:min-h-screen bg-amber-500">
                <ul className='text-center md:py-10 py-4 px-4 text-white space-y-3'>
                    {
                        isAdmin ? <>
                            <div>
                                <Link to={"/dashboard/adminHome"}
                                    className={`p-1 ${location.pathname === '/dashboard/adminHome' ? 'border-b-2 rounded-lg border-white' : ''}`}
                                >
                                    Dashboard
                                </Link>
                            </div>
                        </>
                            :
                            <>
                                <div>
                                    <Link to={"/dashboard/userHome"}
                                        className={`p-1 ${location.pathname === '/dashboard/userHome' ? 'border-b-2 rounded-lg border-white' : ''}`}
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            </>
                    }
                    <hr className='text-white my-10' />

                    {/* shared link */}
                    <div className='space-y-3'>
                        <Link to={"/"}>Home</Link>

                        <div>
                            <button onClick={handleLogout}>Log Out</button>
                        </div>
                    </div>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="w-full">
                <nav className='flex flex-row justify-between mb-5 border-b border-amber-500 p-2'>
                    <h3 className="text-3xl font-black"><Link to={"/"}>Creator <span className='text-amber-500'>Dashboard</span></Link></h3>
                    <div className='flex items-center gap-2'>
                        <div className='border rounded-full'>
                            <img className="w-10 h-10 rounded-full border-2 border-amber-500 cursor-pointer"
                                referrerPolicy="no-referrer"
                                src={user?.photoURL || "None"}
                                alt={user?.displayName || "User"}
                                title={user?.displayName || "User"} />
                        </div>
                        <button onClick={handleLogout}
                            className='border rounded-lg px-2 py-1 text-white bg-pink-500 hover:bg-pink-700'>Log out</button>
                    </div>
                </nav>
                <section className='px-2 py-4'>
                    <Outlet></Outlet>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;