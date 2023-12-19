import { TProps } from "../interface/Props";
import Footer from "./Footer";
import Navbar from "./Navbar";




export default function Layout({ children }: TProps) {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
