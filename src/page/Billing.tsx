import BillBanner from "../components/Billing/BillBanner";
import BillTitle from "../components/Billing/BillTitle";
import OrderSubmitForm from "../components/Billing/Form/OrderSubmitForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Billing() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <BillBanner />
            <BillTitle />
            <OrderSubmitForm />
            <Footer />
        </div>
    )
}
