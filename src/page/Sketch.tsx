import Container from "../components/Container";
import Layout from "../components/Layout";
import Banner from "../components/Sketch/Banner";
import Content from "../components/Sketch/Content";

export default function Sketch() {
    return (
        <Container>
            <Layout>
                <Banner />
                <Content />
            </Layout>
        </Container>
    )
}
