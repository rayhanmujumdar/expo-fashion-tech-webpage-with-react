import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputContainer from "../../ui/InputContainer";
import Title from "../../ui/Title";
import CheckBox from "./CheckBox";

export default function SignUpForm() {
    return (
        <Form>
            <Title className="capitalize py-10">Create an account</Title>
            <div className="space-y-5 w-full">
                <InputContainer>
                    <Input type="email" name="email" placeholder="Email*" required />
                </InputContainer>
                <InputContainer>
                    <Input type="password" name="password" placeholder="Password*" />
                </InputContainer>
                <InputContainer>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Password confirmation*"
                    />
                </InputContainer>
            </div>
            <Button className="my-10" type="submit">
                Create
            </Button>
            <InputContainer>
                <CheckBox label="I agree to all terms & conditions of Expo Fashion Tech by clicking
                        “Create”" type="checkbox" required />
            </InputContainer>
            <div className="my-10 text-sm md:text-lg space-x-3">
                <span>Already have an account? </span>
                <span className="cursor-pointer">Sign in!</span>
            </div>
        </Form>
    );
}
