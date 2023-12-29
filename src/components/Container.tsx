import { TProps } from "../interface/Props";

export default function Container({ children }: TProps) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}
