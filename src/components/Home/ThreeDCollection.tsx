import theeDImage from '../../assert/1x/3d-image-1.png'
import Title from '../../ui/Title'
export default function ThreeDCollection() {
    return (
        <section
            className="grid grid-cols-2 items-start justify-between py-20 border-b border-gray-400"
        >
            <Title>3D</Title>
            <img src={theeDImage} alt="3d image" />
        </section>
    )
}
