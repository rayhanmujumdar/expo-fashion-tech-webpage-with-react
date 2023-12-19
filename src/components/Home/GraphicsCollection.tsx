import graphicsImg_1 from '../../assert/1x/graphics-image-1.png'
import graphicsImg_2 from '../../assert/1x/graphics-image-2.png'
export default function GraphicsCollection() {
    return (
        <section className="grid grid-cols-3 py-20">
            <h3 className="text-title col-span-1">GRAPHICS(IF ANY)</h3>
            <div className="grid grid-cols-[400px_auto] gap-x-20 mt-20 col-span-2">
                <img
                    src={graphicsImg_1}
                    alt="graphics image"
                    className="m-auto"
                />
                <img
                    src={graphicsImg_2}
                    alt="graphics 
                 image"
                />
            </div>
        </section>
    )
}
