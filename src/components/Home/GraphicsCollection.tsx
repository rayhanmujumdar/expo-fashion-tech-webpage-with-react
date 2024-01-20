import graphicsImg_1 from '../../assert/1x/graphics-image-1.png'
import graphicsImg_2 from '../../assert/1x/graphics-image-2.png'
import Title from '../ui/Title'
export default function GraphicsCollection() {
    return (
        <section className="grid gap-y-2 md:gap-y-0 md:grid-cols-3 py-20">
            <Title className="col-span-1 whitespace-nowrap md:whitespace-normal">GRAPHICS(IF ANY)</Title>
            <div className="grid md:grid-cols-[400px_auto] md:gap-x-20 mt-10 md:mt-20 col-span-2 gap-y-5 md:gap-y-0">
                <img
                    src={graphicsImg_1}
                    alt="graphics image"
                    className="m-auto w-[280px] md:min-w-full"
                />
                <img
                    src={graphicsImg_2}
                    alt="graphics 
                 image"
                    className='m-auto w-[280px] md:min-w-full'
                />
            </div>
        </section>
    )
}
