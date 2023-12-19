import twoDImage from '../../assert/1x/2d-image.png'
export default function TwoDCollection() {
    return (
        <section
            className="grid grid-cols-2 items-start justify-between py-20 border-b border-gray-400"
        >
            <h3 className="text-title">2D</h3>
            <img
                src={twoDImage}
                alt="2d-image"
                className="mx-auto"
            />
        </section>
    )
}
