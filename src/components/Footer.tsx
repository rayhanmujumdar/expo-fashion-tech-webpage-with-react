import footerLogo from '../assert/SVG/footer-logo.svg'
export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center space-y-4 py-5">
            <img src={footerLogo} alt="logo" className="w-24" />
            <div className="divider border-b-black/50 w-full"></div>
            <p className="tracking-widest text-sm font-medium">
                @2023 EXPO FASHION TECH
            </p>
        </footer>
    )
}
