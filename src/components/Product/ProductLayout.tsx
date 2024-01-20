import { TProps } from "../../interface/Props";

export default function ProductLayout({ children }: TProps) {
    return <div className="grid grid-cols-6">{children}</div>;
}
