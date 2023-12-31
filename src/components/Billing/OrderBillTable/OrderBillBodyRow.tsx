import { TProps } from "../../../interface/Props";

export default function OrderBillBodyRow({ children }: TProps) {
    return (
        <div className="flex justify-between min-w-full md:w-3/4 pt-5">
            {children}
        </div>
    )
}
