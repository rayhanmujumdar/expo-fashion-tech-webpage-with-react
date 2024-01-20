import { TProps } from "../../interface/Props";

type TProductMenubarProps = TProps & {
    title: string;
}
export default function ProductMenuItem({ children, title }: TProductMenubarProps) {
    return (
        <div>
            <div>
                <p>{title}</p>
                <div className="w-80 h-0.5 bg-gray-300"></div>
            </div>
            {children}
        </div>
    )
}
