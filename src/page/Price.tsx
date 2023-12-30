import Container from "../components/Container";
import Layout from "../components/Layout";
import PriceHeadTitle from "../components/Price/PriceHeadTitle";
import PriceItems from "../components/Price/PriceItems";

export default function Price() {
    return (
        <Container>
            <Layout>
                <div className="mt-20">
                    <PriceHeadTitle />
                    <PriceItems />
                </div>
            </Layout>
        </Container>
    )
}
