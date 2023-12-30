import Title from '../../ui/Title'

export default function PriceHeadTitle() {
    return (
        <div className="flex justify-center items-center py-5 flex-col">
            <Title>Pricing</Title>
            <p className="text-sm tracking-widest">( VAT not included )</p>
        </div>
    )
}
