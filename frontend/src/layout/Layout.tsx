import { Stack as MuiStack, Box as MuiBox } from "@mui/material";
import type { LayoutProps } from "./Layout.types";
import { Header } from "@containers/Header";

export const Layout = (props: LayoutProps) => {
    const { children, showHeader = true } = props;

    return (
        <>
            {showHeader && <Header />}
            <MuiStack direction="row" justifyContent="center">
                <MuiBox p={2} maxWidth={1600}>
                    {children}
                </MuiBox>
            </MuiStack>
        </>
    );
};
