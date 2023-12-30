import { TProps } from "../interface/Props";

export default function Quote({ text, className }: { text: string } & TProps) {
    return (
        <div className="py-3 border-b border-gray-700">
            <p className={`text-gray-500 uppercase text-center text-sm md:text-base md:text-start  ${className}`}>{text}</p>
        </div>
    )
}
