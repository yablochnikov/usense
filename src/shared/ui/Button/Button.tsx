import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    PRIMARY = "primary",
}

export enum ButtonVariant {
    ROUNDED = "rounded",
    CIRCLE = "circle",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className= "",
        children,
        theme = ButtonTheme.PRIMARY,
        type = "button",
        variant = "",
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme], cls[variant]])}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};
