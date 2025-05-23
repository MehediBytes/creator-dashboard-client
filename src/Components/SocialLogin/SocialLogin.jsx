import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";

const SocialLogin = () => {

    const { googleSignIn, setUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                if (result.user?.email) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Logged in successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate(from, { replace: true });
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                    role: "user"
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data?.email){
                            navigate(from, { replace: true });
                        }
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}
                className="bg-amber-500 font-semibold text-white py-2 px-10 w-full rounded-md hover:bg-amber-600 flex items-center gap-2 justify-center"
            >
                <FaGoogle></FaGoogle>
                <p>Login with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;