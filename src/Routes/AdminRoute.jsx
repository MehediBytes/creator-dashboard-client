import { useLocation } from "react-router-dom";
import useAdmin from "../Hooks/UseAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="loading loading-spinner loading-xl text-amber-500"></div>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;