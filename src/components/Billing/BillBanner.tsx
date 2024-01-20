import Title from "../ui/Title";

export default function BillBanner() {
    return (
        <div
            className="bg-bill-banner-bg-img w-full min-w-fit h-52 md:h-64 max-h-full bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col my-12 hover:bg-blend-darken"
        >
            <Title>PRICING</Title>
            <p className="text-lg tracking-widest">(VAT not included)</p>
        </div>
    )
}
