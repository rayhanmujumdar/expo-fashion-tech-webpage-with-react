import { ButtonHTMLAttributes } from "react";
import { TProps } from "../interface/Props";

export default function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & TProps) {
    return (
        <button {...props} className={`btn ${className}`}>
            {children}
        </button>
    )
}
