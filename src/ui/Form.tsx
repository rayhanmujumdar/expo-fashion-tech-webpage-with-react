import { FormHTMLAttributes } from "react";
import { TProps } from "../interface/Props";

export default function Form({ className, children, ...props }: TProps & FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form {...props} className={`form ${className}`}>
            {children}
        </form>
    )
}
