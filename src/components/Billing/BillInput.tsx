import { InputHTMLAttributes } from "react";
import { TProps } from "../../interface/Props";

export default function BillInput({ className, type = 'text', ...props }: InputHTMLAttributes<HTMLInputElement> & TProps) {
    return (
        <input
            {...props}
            type={type}
            className={`bill-input ${className}`}
        />
    )
}
