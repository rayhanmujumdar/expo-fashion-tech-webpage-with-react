import { TProps } from "../../interface/Props";

export default function Label({ label }: TProps) {
    return (
        <div className="flex items-center gap-x-3 my-1">
            <input type="checkbox" name="" id={label} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}
