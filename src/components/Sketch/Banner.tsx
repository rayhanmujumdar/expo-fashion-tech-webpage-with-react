import Title from "../../ui/Title";
import manImage from '../../assert/1x/man.png'
import womanImage from '../../assert/1x/woman.png'
import childImage from '../../assert/1x/child.png'
export default function Banner() {
    return (
        <section className="py-20 flex flex-col justify-center items-center">
            <div className="w-full p-3 md:p-0 md:w-1/2 text-center" >
                <Title>Create Your Own</Title>
                <p className="text-lg">
                    with personal touches, Use Draw's Sketch to body to sketch out
                    ideas and find your perfect 3D pattern match.
                </p>
            </div >
            <div
                className="flex space-y-3 md:space-y-0 md:space-x-6 md:mt-10 justify-center items-start flex-wrap"
            >
                <img src={manImage} alt="man image" />
                <div>
                    <img src={womanImage} alt="woman image" />
                    <p className="text-sm text-center pt-0.5">
                        Choose your model and draw your design
                    </p>
                </div>
                <img src={childImage} alt="child image" />
            </div>
        </section >
    )
}
