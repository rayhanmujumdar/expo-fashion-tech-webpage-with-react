export default function OrderBillTableHead() {
    return (
        <div
            className="w-3/4 flex justify-between items-end border-b border-gray-500 pb-8"
        >
            <p className="flex flex-col w-1/2">
                <span> Group </span>
                <span className="text-xl"> Monthly billing </span>
            </p>
            <p className="w-96 text-end flex-shrink-0">
                USD <span className="text-4xl tracking-wider">$100</span> x 1 paying
                user
            </p>
            <p className="tracking-widest w-full text-end">
                USD $100 /per 30 days
            </p>
        </div>
    )
}
