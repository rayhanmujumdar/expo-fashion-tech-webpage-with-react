import { Link } from "react-router-dom";

export default function QuickMove() {
    return (
        <div className="py-10 px-3 md:px-0 border-t border-black">
            <ul className="uppercase pb-10 space-y-1">
                <li><a href="#"> ABOUT US </a></li>
                <li><Link to="/pricing"> PRICING </Link></li>
                <li><a href="#"> PRIVACY POLICY </a></li>
                <li><a href="#"> TERMS AND CONDITION </a></li>
                <li><a href="#">CONTACT </a></li>
            </ul>
            <div className="space-y-1">
                <p className="uppercase">follow us</p>
                <div className="flex justify-start items-center text-xl space-x-3">
                    <i className="fa-brands fa-facebook socialIcon"></i>
                    <i className="fa-brands fa-youtube socialIcon"></i>
                    <i className="fa-brands fa-instagram socialIcon"></i>
                    <i className="fa-brands fa-twitter socialIcon"></i>
                </div>
            </div>
        </div>
    )
}
