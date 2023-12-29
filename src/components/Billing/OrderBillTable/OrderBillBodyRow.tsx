import { TProps } from "../../../interface/Props";

export default function OrderBillBodyRow({ children }: TProps) {
    return (
        <div className="flex justify-between w-3/4 pt-5">
            {children}
        </div>
    )
}
