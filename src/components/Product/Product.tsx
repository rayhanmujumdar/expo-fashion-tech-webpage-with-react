import shopIcon from '../../assert/SVG/bucket-image.svg'
export default function Product() {
    return (
        <div className="product-card">
            <p className="absolute right-3 top-1 z-30">FREE</p>
            {/* body */}
            <div className="product-body"></div>
            {/* button */}
            <div className="product-footer">
                <img
                    className="product-footer-icon"
                    src={shopIcon}
                    alt="bucket image"
                />
            </div>
        </div>
    )
}
