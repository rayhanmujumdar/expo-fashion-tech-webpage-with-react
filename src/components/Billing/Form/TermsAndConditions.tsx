import { TProps } from "../../../interface/Props";

export default function TermsAndConditions({ children }: TProps) {
    return (
        <div className="flex justify-center items-start flex-col mx-3 md:mx-0">
            <div className="space-y-2 text-lg my-5">
                <p>
                    You will be billed every 30 calendar days unless your plan is
                    downgraded.
                </p>
                <p>
                    The billing amount varies depending on the number of Paying Users
                    among Group Members, including the Group Admin herself/himself.
                </p>
                <p>
                    If you downgrade, your Group will be closed on expiry date.
                    However, the Addition Credits calculated by the changes during the
                    last measurement period will be charged if there are any Addition
                    Credits.
                </p>
                <p>
                    Your payment method and information will be managed and processed
                    securely by encryption. The currency is International Dollars.
                </p>
            </div>
            <div>
                <label className="space-x-2" htmlFor="check-for-order">
                    <input type="checkbox" id="check-for-order" />
                    <span>
                        I agree the terms of service and accept the regular payment
                        process that will occur every 30 calender days.
                    </span>
                </label>
            </div>
            {children}
        </div>
    )
}
