import dressImg from '../../assert/1x/dress.png'
export default function Dress() {
    return (
        <section
            className="flex flex-col md:flex-row justify-center items-center gap-x-4 md:bg-gray-100 h-full max-h-[300px] my-96"
        >
            <img
                src={dressImg}
                alt="dress image"
                className="flex-shrink-0"
            />
            <p className="p-5 text-justify md:text-start">
                EXPO FASHION TECH is one of the best platform where you can find all
                design assets that meet to the street wear fashion. It may look
                overwhelming at first glance as it’s so full featured, but that’s
                because it contains pretty much everything you need to catalog,
                organise, edit and composite your project. It opens unsurpassed
                workflow freedom for 2D artists. Buy all professional designs ready
                to be used in your projects, production, presentation or others.
                Assets are available for download in many industry-accepted formats
                including DXF, OBJ, PNG, JPG, AI, PS and other. If you are searching
                for real-time pattern or 3D assets, we have a leading digital art
                library for all your needs.
            </p>
        </section>
    )
}
