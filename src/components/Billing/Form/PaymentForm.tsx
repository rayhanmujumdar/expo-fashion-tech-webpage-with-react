import Input from "../../ui/Input";
import InputContainer from "../../ui/InputContainer";

export default function PaymentForm() {
    return (
        <div className="md:px-20 grid md:grid-cols-2 gap-x-10 gap-y-5">
            <InputContainer>
                <select title="card" name="card" id="" className="input" required>
                    <option value="">Card type*</option>
                    <option value="Visa">VISA</option>
                    <option value="Mastercard">Mastercard</option>
                </select>
            </InputContainer>
            <InputContainer>
                <Input
                    type="number"
                    placeholder="Card number*"
                    required
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
                <select title="phone" id="" className="input" required>
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
        </div>
    )
}
