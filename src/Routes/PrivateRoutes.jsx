import { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1>Loading</h1>
    }
    if (!user) {
        return (<Navigate state={location.pathname} to='/login'></Navigate>);
    }
    if (user) {
        return children;
    }
}

export default PrivateRoutes;