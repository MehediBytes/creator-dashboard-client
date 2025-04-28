import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
    const { signIn, showPassword, setShowPassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                user & Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })

    };

    return (
        <section>
            {/* Go Back Button */}
            <div className="pt-10 text-xl font-semibold max-w-3xl mx-auto">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-600 mb-5"
                >
                    <FaArrowLeft /> Go Back to Home
                </button>
            </div>
            <div className="max-w-3xl mx-auto">
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full"
                    >
                        <h2 className="text-3xl font-bold text-center mb-6 text-amber-500">Login Now!</h2>
                        <div className="mb-4">
                            <label className="block mb-1">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: "Password is required" })}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                                <button type="button" className="absolute right-5 top-3" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-amber-500 font-semibold text-white py-2 px-10 w-full rounded-md hover:bg-amber-600"
                        >
                            Login
                        </button>
                        <p className="text-center my-5 font-semibold">OR</p>
                        <SocialLogin></SocialLogin>
                        <p className="text-sm mt-6 text-center">
                            Do not have an account?{" "}
                            <Link to="/signup" className="text-purple-500 font-bold hover:underline">
                                Register here.
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Login;
