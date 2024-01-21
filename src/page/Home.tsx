import Container from "../components/Container";
import Dress from "../components/Home/Dress";
import DressCollection from "../components/Home/DressCollection";
import HomeBanner from "../components/Home/HomeBanner";
import Services from "../components/Home/Services";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Container>
            <Layout>
                <HomeBanner />
                <Services />
                <Dress />
                <DressCollection />
                {/* <QuickMove /> */}
            </Layout>
        </Container>
    )
}
