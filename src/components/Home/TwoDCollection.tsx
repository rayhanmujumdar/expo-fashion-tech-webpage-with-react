import twoDImage from '../../assert/1x/2d-image.png'
import Title from '../../ui/Title'
export default function TwoDCollection() {
    return (
        <section
            className="collection-layout"
        >
            <Title>2D</Title>
            <img
                src={twoDImage}
                alt="2d-image"
                className="mx-auto col-span-2 md:col-span-1"
            />
        </section>
    )
}
