export default function OrderBillTableHead() {
    return (
        <div
            className="min-w-full md:w-3/4 flex justify-between items-end border-b border-gray-500 md:pb-8"
        >
            <p className="flex flex-col w-1/2">
                <span className="text-sm md:text-base"> Group </span>
                <span className="text-sm md:text-xl"> Monthly billing </span>
            </p>
            <p className="w-40 md:w-96 text-end flex-shrink-0 text-sm md:text-base">
                USD <span className="text-xl md:text-4xl md:tracking-wider">$100</span> x 1 paying
                user
            </p>
            <p className="tracking-widest w-full text-end md:text-base text-sm">
                USD $100 /per 30 days
            </p>
        </div>
    )
}
