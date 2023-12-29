import Container from "../components/Container";
import Footer from "../components/Footer";
import HomeBanner from "../components/Home/HomeBanner";
import Dress from "../components/Home/Dress";
import DressCollection from "../components/Home/DressCollection";
import Services from "../components/Home/Services";
import Navbar from "../components/Navbar";
import QuickMove from "../components/QuickMove";

export default function Home() {
    return (
        <Container>
            <Navbar />
            <HomeBanner />
            <Services />
            <Dress />
            <DressCollection />
            <QuickMove />
            <Footer />
        </Container>
    )
}
