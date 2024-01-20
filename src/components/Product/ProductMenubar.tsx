import { TProps } from "../../interface/Props";



export default function ProductMenubar({ children }: TProps) {
    return (
        <div className="col-span-2 space-y-8">
            {children}
        </div>
    )
}
