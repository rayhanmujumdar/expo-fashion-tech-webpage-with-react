import OrderBillBodyRow from "./OrderBillBodyRow";

export default function OrderBillTableBody() {
    return (
        <div className="py-2 md:py-5">
            <OrderBillBodyRow>
                <p className="w-1/2"></p>
                <p className="w-40 md:w-96 text-end flex-shrink-0">Subtotal</p>
                <p className="w-full text-end">$100</p>
            </OrderBillBodyRow>
            <OrderBillBodyRow>
                <p className="w-1/2"></p>
                <p className="w-40 md:w-96 text-end flex-shrink-0">Vat</p>
                <p className="w-full text-end">$0</p>
            </OrderBillBodyRow>
        </div>
    )
}
