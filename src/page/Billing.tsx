import BillBanner from "../components/Billing/BillBanner";
import BillTitle from "../components/Billing/BillTitle";
import OrderSubmitForm from "../components/Billing/Form/OrderSubmitForm";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function Billing() {
    return (
        <Container>
            <Layout>
                <BillBanner />
                <BillTitle />
                <OrderSubmitForm />
            </Layout>
        </Container>
    )
}
