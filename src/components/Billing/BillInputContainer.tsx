import { TProps } from "../../interface/Props";

export default function BillInputContainer({ children, className, ...props }: TProps) {
    return (
        <div {...props} className={`bill-input-container ${className}`}>
            {children}
        </div>
    )
}
