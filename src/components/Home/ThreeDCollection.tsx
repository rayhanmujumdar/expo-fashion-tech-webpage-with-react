import theeDImage from '../../assert/1x/3d-image-1.png'
import Title from '../ui/Title'
export default function ThreeDCollection() {
    return (
        <section
            className="collection-layout"
        >
            <Title>3D</Title>
            <img src={theeDImage} alt="3d image" className='col-span-2 md:col-span-1' />
        </section>
    )
}
