import theeDImage from '../../assert/1x/3d-image-1.png'
export default function ThreeDCollection() {
    return (
        <section
            className="grid grid-cols-2 items-start justify-between py-20 border-b border-gray-400"
        >
            <h3 className="text-title">3D</h3>
            <img src={theeDImage} alt="3d image" />
        </section>
    )
}
