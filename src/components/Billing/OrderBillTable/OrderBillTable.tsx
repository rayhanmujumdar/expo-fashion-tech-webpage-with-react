import OrderBillResult from "./OrderBillResult";
import OrderBillTableBody from "./OrderBillTableBody";
import OrderBillTableHead from "./OrderBillTableHead";

export default function OrderBillTable() {
    return (
        <div className="mx-2 py-10 md:w-4/6 md:py-0 md:mx-20 md:my-10">
            <OrderBillTableHead />
            <OrderBillTableBody />
            <OrderBillResult />
        </div>
    )
}
