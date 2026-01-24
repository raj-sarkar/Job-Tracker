import { Typography } from "@components/Typography";
import {
    CircularProgress as MuiCircularProgress,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { InputField, type InputFieldItem } from "@components/InputField";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import { useState } from "react";
import type { SignupCredentials } from "./SignupForm.types";
import { StyledBox, StyledButton } from "@containers/LoginForm";
import { useLazySignupQuery } from "@services";
import { useAppDispatch } from "@hooks";
import { setUser } from "@features/auth";
import { NavLink } from "react-router-dom";
import { Icon } from "@components/Icon";

export const SignupForm = () => {
    const [triggerSignup, { isLoading, isFetching }] = useLazySignupQuery();
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
    const [errorName, setErrorName] = useState<string>("");
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const [credentials, setCredentials] = useState<SignupCredentials>({
        name: "",
        email: "",
        password: "",
    });

    const inputFields: InputFieldItem[] = [
        {
            id: "input-1",
            placeholder: "Name",
            icon: PersonIcon,
            onChange: (e) => {
                setCredentials((prev) => ({
                    ...prev,
                    name: e.target.value.trim(),
                }));
                if (e.target.value) setErrorName("");
                else setErrorName("Email is required");
            },
            error: errorName,
        },
        {
            id: "input-2",
            placeholder: "Email",
            icon: EmailIcon,
            onChange: (e) => {
                setCredentials((prev) => ({
                    ...prev,
                    email: e.target.value.trim(),
                }));
                if (e.target.value) setErrorEmail("");
                else setErrorEmail("Email is required");
            },
            error: errorEmail,
        },
        {
            id: "input-3",
            placeholder: "Password",
            icon: HttpsIcon,
            onChange: (e) => {
                setCredentials((prev) => ({
                    ...prev,
                    password: e.target.value.trim(),
                }));
                if (e.target.value) setErrorPassword("");
                else setErrorPassword("Password is required");
            },
            error: errorPassword,
            type: "password",
        },
    ];

    const validateForm = () => {
        let c = 0;

        if (!credentials.name) {
            setErrorName("Name is required");
        }

        if (!credentials.email) {
            setErrorEmail("Email is required");
            c++;
        }

        if (!credentials.password) {
            setErrorPassword("Password is required");
            c++;
        }

        return c === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const data = await triggerSignup(credentials).unwrap();
            dispatch(setUser({ user: data }));
        } catch (error) {
            console.log("login error", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <StyledBox>
                <Icon icon={WorkIcon} size="md" />
                <Typography
                    variant={isDesktop ? "h5" : "subtitle1"}
                    color={theme.palette.grey[700]}
                >
                    Create to your account
                </Typography>
                {inputFields.map((item) => (
                    <InputField inputFieldItem={item} key={item.id} />
                ))}
                <StyledButton type="submit">
                    {isLoading || isFetching ? (
                        <MuiCircularProgress color="inherit" size={20} />
                    ) : (
                        "Sign up"
                    )}
                </StyledButton>
                <Typography variant="body2">
                    Already have an account?
                    <NavLink to={"/login"}>
                        <Typography component="span" color="primary">
                            {" "}
                            Sign in
                        </Typography>
                    </NavLink>
                </Typography>
            </StyledBox>
        </form>
    );
};
