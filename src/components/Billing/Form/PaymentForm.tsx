import Input from "../../../ui/Input";
import InputContainer from "../../../ui/InputContainer";

export default function PaymentForm() {
    return (
        <form className="px-20 grid grid-cols-2 gap-x-10 gap-y-5">
            <InputContainer>
                <select title="card" name="card" id="" className="input">
                    <option value="">Card type*</option>
                    <option value="Visa">VISA</option>
                    <option value="Mastercard">Mastercard</option>
                </select>
            </InputContainer>
            <InputContainer>
                <Input
                    type="number"
                    placeholder="Card number*"
                />
            </InputContainer>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Expiry date"
                />
            </InputContainer>
            <InputContainer>
                <Input
                    type="number"
                    placeholder="Security code"
                />
            </InputContainer>
            <InputContainer>
                <select title="phone" id="" className="input">
                    <option value="">Phone number type</option>
                    <option value="dog">Mobile</option>
                    <option value="dog">Telephone</option>
                </select>
            </InputContainer>
            <InputContainer>
                <Input
                    type="number"
                    placeholder="Mobile number"
                />
            </InputContainer>
        </form>
    )
}
