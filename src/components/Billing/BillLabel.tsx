import { LabelHTMLAttributes } from "react";
import { TProps } from "../../interface/Props";
// IntrinsicAttributes
export default function BillLabel({ className, children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & TProps) {
    return (
        <label {...props} className={`bill-label ${className}`}>{children}</label>
    )
}
