import type { SvgIconProps as MuiSvgIconProps } from "@mui/material";

/**
 * Types for input field item
 * @property id - id of item
 * @property icon - icon for start adorment
 * @property onChange - function to call on change input
 * @property placeholder - value of input placeholder
 * @property error - error value of input field
 * @property type - type of input field
 */
export interface InputFieldItem {
    id: string;
    icon: React.ComponentType<MuiSvgIconProps>;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    placeholder?: string;
    error: string;
    type?: string;
}

/**
 * Props for input field component
 * @property inputFieldItem - input item to render
 */
export interface InputFieldsProps {
    inputFieldItem: InputFieldItem;
}
