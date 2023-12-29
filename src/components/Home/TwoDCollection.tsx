import twoDImage from '../../assert/1x/2d-image.png'
import Title from '../../ui/Title'
export default function TwoDCollection() {
    return (
        <section
            className="grid grid-cols-2 items-start justify-between py-20 border-b border-gray-400"
        >
            <Title>2D</Title>
            <img
                src={twoDImage}
                alt="2d-image"
                className="mx-auto"
            />
        </section>
    )
}
