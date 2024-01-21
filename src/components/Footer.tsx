import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="w-full py-5 px-3 md:px-0 border-t border-black flex justify-between items-center">
            <p>@{currentYear} EXPO FASHION TECH</p>
            <ul className="space-y-1 flex items-center gap-x-10 justify-center ">
                <li><Link to="#"> ABOUT US </Link></li>
                <li><Link to="#"> PRIVACY POLICY </Link></li>
                <li><Link to="#"> TERMS AND CONDITION </Link></li>
            </ul>
            <div className="space-y-1">
                <div className="flex justify-start items-center text-xl space-x-3">
                    <i className="fa-brands fa-facebook socialIcon"></i>
                    <i className="fa-brands fa-youtube socialIcon"></i>
                    <i className="fa-brands fa-instagram socialIcon"></i>
                    <i className="fa-brands fa-twitter socialIcon"></i>
                </div>
            </div>
        </footer>
    )
}
