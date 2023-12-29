import BillInput from "../BillInput";
import BillInputContainer from "../BillInputContainer";
import BillLabel from "../BillLabel";

export default function DetailsForm() {
    return (
        <form className="bill-form my-10">
            <BillInputContainer>
                <BillLabel htmlFor="name">Full name*</BillLabel>
                <BillInput id="name" />
            </BillInputContainer>
            <BillInputContainer>
                <BillLabel htmlFor="Country">Country/Region*</BillLabel>
                <BillInput id="Country" />
            </BillInputContainer>
            <BillInputContainer>
                <BillLabel htmlFor="Address">Address*</BillLabel>
                <BillInput id="Address" />
            </BillInputContainer>
            <BillInputContainer>
                <BillLabel htmlFor="Address">Address(Optional)</BillLabel>
                <BillInput id="Address" />
            </BillInputContainer>
            <BillInputContainer>
                <BillLabel htmlFor="City">City*</BillLabel>
                <BillInput type="text" id="City" />
            </BillInputContainer>
            <BillInputContainer>
                <BillLabel htmlFor="portal">Zip/portal*</BillLabel>
                <BillInput id="portal" />
            </BillInputContainer>
        </form>
    )
}
