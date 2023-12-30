import { InputHTMLAttributes } from "react";
import { TProps } from "../../interface/Props";

export default function CheckBox({ label, className, ...props }: InputHTMLAttributes<HTMLInputElement> & TProps) {
    return (
        <label className="flex space-x-2 items-start" htmlFor="checkbox">
            <input
                {...props}
                className={`mt-[6px] accent-violet-500 ${className}`}
                id="checkbox"
            />
            <p className="text-sm md:text-lg">
                {label}
            </p>
        </label>
    )
}
