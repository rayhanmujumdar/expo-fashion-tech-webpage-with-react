import navLogo from '../assert/1x/nav-logo.png'
import globalIcon from '../assert/SVG/global.svg'
import profileIcon from '../assert/SVG/profile.svg'
import shopIcon from '../assert/SVG/shop.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="mx-2 md:mx-0">
            <div className="flex pt-5 pb-1.5 justify-end items-center space-x-3">
                <Link to='/'>
                    <img src={globalIcon} alt="visit" className="w-6 h-6" title='visit' />
                </Link>
                <Link to='/orders'>
                    <img src={shopIcon} alt="shopping" className="w-6 h-6" title='buy' />
                </Link>
                <Link to='/signup'>
                    <img
                        src={profileIcon}
                        alt="profile"
                        className="w-6 h-6"
                    />
                </Link>
            </div>
            <div className="flex justify-between items-end py-3">
                <div className="flex justify-center items-center gap-x-0.5 ml-4">
                    <Link to='/'>
                        <img src={navLogo} alt="logo" className="w-52" />
                    </Link>
                </div>
                <ul className="md:flex gap-x-8 text-sm font-medium hidden">
                    <li><Link to="/sketch">2D LIBRARY</Link></li>
                    <li><Link to="/">PRINT GRAPHICS</Link></li>
                    <li><Link to="/sketch">BUY 3D & PATTERN</Link></li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/">SUPPORT</Link></li>
                </ul>
            </div>
            <div className="w-full border-b border-b-black/50"></div>
        </nav>
    )
}
