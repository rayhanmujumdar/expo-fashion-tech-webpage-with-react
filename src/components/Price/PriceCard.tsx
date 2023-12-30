import { TBenefit, TOffersItem } from "../../interface/price.interface";

export default function PriceCard({ offerItem }: { offerItem: TOffersItem }) {
    const { name, price, className, benefits } = offerItem
    return (
        <div className={`price-card ${className}`}>
            <p className="bg-black text-gray-400 w-60 text-center py-1 rounded-xl">
                {name}
            </p>
            <div className="py-10">
                <div className="flex items-start">
                    <span className="text-sm uppercase pr-1">usd</span>
                    <p>
                        <span className="text-4xl">
                            ${price}
                        </span>
                        <span className="text-sm">/per user</span>
                    </p>
                </div>
            </div>
            <div
                className="flex justify-center items-center flex-col bg-gray-100 w-80 pb-5"
            >
                <div className="py-8">
                    <ol className="list-disc">
                        {benefits.map((benefit: TBenefit) => <li className="list-text-cap">{benefit.name}</li>)}
                    </ol>
                </div>
                <div className="divider"></div>
                <button className="btn rounded-full uppercase">Select</button>
            </div>
        </div>
    )
}
