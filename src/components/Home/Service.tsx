import { TProps } from "../../interface/Props";

export default function Service({ service }: TProps) {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col items-center space-y-4 py-4">
                <img
                    src={service?.logo}
                    alt="service-icon"
                    className="w-20 h-20"
                />
                <p className="text-2xl tracking-widest">{service?.name}</p>
            </div>
            <p className="text-center text-sm">
                {service?.description}
            </p>
        </div>
    )
}
