import OrderBillResult from "./OrderBillResult";
import OrderBillTableBody from "./OrderBillTableBody";
import OrderBillTableHead from "./OrderBillTableHead";

export default function OrderBillTable() {
    return (
        <div className="mx-20 mt-10 mb-20">
            <OrderBillTableHead />
            <OrderBillTableBody />
            <OrderBillResult />
        </div>
    )
}
