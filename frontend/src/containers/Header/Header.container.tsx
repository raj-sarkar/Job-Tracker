import {
    Stack as MuiStack,
    useTheme,
    useMediaQuery,
    Typography,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { IconButton } from "@components/IconButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@components/Button";
import { useAppDispatch } from "@hooks";
import { StyledBox } from "./Header.styles";
import { logout } from "@features/auth";
import { useLazyLogoutQuery } from "@services";

export const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    const location = useLocation().pathname;
    const [triggerLogout] = useLazyLogoutQuery();

    const navItems = [
        {
            id: "item-1",
            text: "Dashboard",
            to: "/",
        },
        {
            id: "item-2",
            text: "Applications",
            to: "/applications",
        },
    ];

    const handleLogout = async () => {
        try {
            await triggerLogout().unwrap();
            dispatch(logout());
        } catch (error) {
            console.log("Error in logout", error);
        }
    };

    return (
        <StyledBox>
            <MuiStack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                p={2}
            >
                <MuiStack
                    direction="row"
                    justifyContent="start"
                    gap={isDesktop ? 2 : 1}
                >
                    <IconButton
                        icon={WorkIcon}
                        iconColor={theme.palette.background.default}
                        size={isDesktop ? "md" : "sm"}
                        onClick={() => navigate("/")}
                    />
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            onClick={() => navigate(item.to)}
                            backgroundColor={
                                location === item.to
                                    ? theme.palette.primary.dark
                                    : theme.palette.primary.main
                            }
                        >
                            <Typography
                                variant={isDesktop ? "subtitle1" : "caption"}
                            >
                                {item.text}
                            </Typography>
                        </Button>
                    ))}
                </MuiStack>
                <Button onClick={handleLogout}>
                    <Typography variant={isDesktop ? "subtitle1" : "caption"}>
                        Log out
                    </Typography>
                </Button>
            </MuiStack>
        </StyledBox>
    );
};
