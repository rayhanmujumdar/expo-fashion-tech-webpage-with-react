import Title from "../ui/Title";
import GraphicsCollection from "./GraphicsCollection";
import PatternCollection from "./PatternCollection";
import TechPackCollection from "./TechPackCollection";
import ThreeDCollection from "./ThreeDCollection";
import TwoDCollection from "./TwoDCollection";

export default function DressCollection() {
    return (
        <>
            <div className="py-10">
                <Title className="text-center">Like What You Get</Title>
                <p className="text-5xl md:text-7xl text-center">+</p>
            </div>
            <div className="w-5/6 mx-auto">
                <TwoDCollection />
                <ThreeDCollection />
                <PatternCollection />
                <TechPackCollection />
                <GraphicsCollection />
            </div>
        </>
    )
}
