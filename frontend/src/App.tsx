import { setUser } from "@features/auth";
import { useAppDispatch } from "@hooks";
import { CssBaseline } from "@mui/material";
import { router } from "@routes";
import { useCheckQuery } from "@services";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
    const { data: user, isLoading, isFetching, isError } = useCheckQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setUser({ user }));
        }
        if (isError) {
            dispatch(setUser({ user: null }));
        }
    }, [user, isError, dispatch]);

    if (isLoading || isFetching) return <>Loading checkUser...</>;

    return (
        <>
            <CssBaseline />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
