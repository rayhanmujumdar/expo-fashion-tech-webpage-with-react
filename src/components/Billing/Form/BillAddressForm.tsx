import { TProps } from "../../../interface/Props";
import Title from "../../../ui/Title";
import BillLogInDirection from "../BillLogInDirection";

export default function BillAddressForm({ children }: TProps) {
    return (
        <div className="w-full min-w-fit">
            <Title className="mt-20">BILLING ADDRESS</Title>
            <div className="w-full max-w-full">
                <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap lg:flex-nowrap">
                        <div className="flex-1 flex-shrink-0">
                            {children}
                        </div>
                        <BillLogInDirection />
                    </div>
                </div>
            </div>
        </div>
    );
}
