import { TOffersItem } from "../../interface/price.interface";
import PriceCard from "./PriceCard";

const offersItems: TOffersItem[] = [
    {
        id: 1,
        name: "Annul billing",
        price: 500,
        benefits: [
            {
                name: "Limited 500 Styles",
            },
            {
                name: "Technical Flats Vector Download",
            },
            {
                name: "3D Files Download",
            },
            {
                name: "Pattern (DXF) Download",
            },
            {
                name: "Tech Pack Download",
            },
            {
                name: "Unlimited Graphic Download",
            },
            {
                name: "Unlimited Moad Board Download",
            },
        ],
    },
    {
        id: 2,
        name: "Annul billing",
        price: 500,
        className: 'border-x border-gray-300',
        benefits: [
            {
                name: "Limited 500 Styles",
            },
            {
                name: "Technical Flats Vector Download",
            },
            {
                name: "3D Files Download",
            },
            {
                name: "Pattern (DXF) Download",
            },
            {
                name: "Tech Pack Download",
            },
            {
                name: "Unlimited Graphic Download",
            },
            {
                name: "Unlimited Moad Board Download",
            },
        ],
    },
    {
        id: 3,
        name: "Annul billing",
        price: 500,
        benefits: [
            {
                name: "Limited 500 Styles",
            },
            {
                name: "Technical Flats Vector Download",
            },
            {
                name: "3D Files Download",
            },
            {
                name: "Pattern (DXF) Download",
            },
            {
                name: "Tech Pack Download",
            },
            {
                name: "Unlimited Graphic Download",
            },
            {
                name: "Unlimited Moad Board Download",
            },
        ],
    },
];

export default function PriceItems() {
    return (
        <div className="flex flex-wrap justify-center items-center sm:gap-5 sm:space-y-0 space-y-5 my-20">
            {offersItems.map((offerItem: TOffersItem) => <PriceCard key={offerItem.id} offerItem={offerItem} />)}
        </div>
    );
}
