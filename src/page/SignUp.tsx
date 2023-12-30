import Container from "../components/Container";
import Layout from "../components/Layout";
import Form from "../components/SignUp/SignUpForm";

export default function SignUp() {
    return (
        <Container>
            <Layout>
                <section className="min-h-screen my-20">
                    <Form />
                </section>
            </Layout>
        </Container>
    )
}
