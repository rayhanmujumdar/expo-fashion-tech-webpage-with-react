import navLogo from '../assert/1x/nav-logo.png'
import globalIcon from '../assert/SVG/global.svg'
import profileIcon from '../assert/SVG/profile.svg'
import shopIcon from '../assert/SVG/shop.svg'


export default function Navbar() {
    return (
        <nav className="mx-2 md:mx-0">
            <div className="flex pt-5 pb-1.5 justify-end items-center space-x-3">
                <img src={globalIcon} alt="world img" className="w-6 h-6" />

                <img src={shopIcon} alt="world img" className="w-6 h-6" />

                <img
                    src={profileIcon}
                    alt="world img"
                    className="w-6 h-6"
                />
            </div>
            <div className="flex justify-between items-end py-3">
                <div className="flex justify-center items-center gap-x-0.5 ml-4">
                    <img src={navLogo} alt="logo" className="w-52" />
                </div>
                <ul className="md:flex gap-x-8 text-sm font-medium hidden">
                    <li><a href="#">2D LIBRARY</a></li>
                    <li><a href="#">PRINT GRAPHICS</a></li>
                    <li><a href="#">BUY 3D & PATTERN</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">SUPPORT</a></li>
                </ul>
            </div>
            <div className="w-full border-b border-b-black/50"></div>
        </nav>
    )
}
