import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Dress from "../components/Home/Dress";
import DressCollection from "../components/Home/DressCollection";
import Services from "../components/Home/Services";
import Navbar from "../components/Navbar";
import QuickMove from "../components/QuickMove";

export default function Home() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <main>
                <Banner />
                <Services />
                <Dress />
                <DressCollection />
            </main>
            <QuickMove />
            <Footer />
        </div>
    )
}
