import Container from "../components/Container";
import HomeBanner from "../components/Home/HomeBanner";
import Dress from "../components/Home/Dress";
import DressCollection from "../components/Home/DressCollection";
import Services from "../components/Home/Services";
import QuickMove from "../components/QuickMove";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Container>
            <Layout>
                <HomeBanner />
                <Services />
                <Dress />
                <DressCollection />
                <QuickMove />
            </Layout>
        </Container>
    )
}
