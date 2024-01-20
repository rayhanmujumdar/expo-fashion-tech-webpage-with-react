import Title from "../ui/Title";

export default function BillTitle() {
    return (
        <div className="w-full min-w-fit py-10">
            <Title className="text-center">MONTHLY BILLING</Title>
            <p className="text-lg text-center font-medium">
                (Once you select to monthly billing, the remaining trail period will
                be terminated)
            </p>
        </div>
    )
}
