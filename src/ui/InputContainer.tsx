import { TProps } from "../interface/Props";

export default function InputContainer({ children }: TProps) {
    return (
        <div className="input-container">
            {children}
        </div>
    )
}
