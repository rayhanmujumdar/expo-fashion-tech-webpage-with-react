import OrderBillTable from "../OrderBillTable/OrderBillTable";
import BillAddressForm from "./BillAddressForm";
import DetailsForm from "./DetailsForm";
import PaymentForm from "./PaymentForm";
import TermsAndConditions from "./TermsAndConditions";

export default function OrderSubmitForm() {
    return (
        <form>
            <BillAddressForm >
                <DetailsForm />
                <PaymentForm />
            </BillAddressForm>
            <OrderBillTable />
            <TermsAndConditions>
                <div className="min-w-full text-center">
                    <button type="submit" className="btn my-16">ORDER</button>
                </div>
            </TermsAndConditions>
        </form>
    )
}
