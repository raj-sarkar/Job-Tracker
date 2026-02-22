import { useAppSelector } from "@hooks";
import { Layout } from "@layout";
import { Navigate, Outlet } from "react-router-dom";
import type { ProtectRouteProps } from "./ProtectRoute.types";

export const ProtectRoute = (props: ProtectRouteProps) => {
    const { isProtected = true, showHeader = true } = props;
    const { authUser, isInitialized } = useAppSelector((state) => state.auth);

    if (!isInitialized) {
        return <>Loading ProtectRoute...</>;
    }

    if (isProtected && !authUser) {
        return <Navigate to="/login" replace />;
    }

    if (!isProtected && authUser) {
        return <Navigate to="/" replace />;
    }

    return (
        <Layout showHeader={showHeader}>
            <Outlet />
        </Layout>
    );
};
