import sampleImg from '../../assert/1x/Sample-image.png'
import techPackImg from '../../assert/1x/tech-pack-image.png'
import trimsImg from '../../assert/1x/trims-image.png'
import Title from '../ui/Title'
export default function TechPackCollection() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 py-20 border-b border-gray-400">
      <Title className="col-span-1
">TECHPACK</Title>
      <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-5 md:gap-x-20 md:mt-20 mt-10 md:col-span-2 justify-center
">
        <div className="flex flex-col justify-center items-center space-y-8 md:col-span-2" >
          <div className="text-center">
            <p className="text-lg">Code</p>
            <span className="text-sm">WSS3-XFT-024</span>
          </div>
          <div className="text-center">
            <p className="text-lg">DETAILS</p>
            <p className="text-sm">
              WOMEN STRAP DRESS HALTER NECK PENCIL DRESS SPRING_SUMMER 23
              SIZE M ENZYME WASH EFFECT NO EMBELLISHMENT
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg">FABRIC</p>
            <span className="text-sm">100% COTTON TWILL DENIM</span>
          </div>
          <div
            className="flex flex-col justify-center items-center space-y-1"
          >
            <p className="text-lg">TRIMS</p>
            <img src={trimsImg} alt="trims-image" />
          </div>
          <div
            className="flex justify-center items-center flex-col space-y-1"
          >
            <p>SAMPLE</p>
            <img src={sampleImg} alt="sample-image" />
          </div>
        </div>
        <div className='col-span-3'>
          <img
            src={techPackImg}
            alt="TechPack image"
            className='w-80 md:w-full mx-auto md:mx-0'
          />
        </div>
      </div>
    </section>
  )
}
