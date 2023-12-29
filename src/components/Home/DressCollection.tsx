import GraphicsCollection from "./GraphicsCollection";
import PatternCollection from "./PatternCollection";
import TechPackCollection from "./TechPackCollection";
import ThreeDCollection from "./ThreeDCollection";
import TwoDCollection from "./TwoDCollection";

export default function DressCollection() {
    return (
        <>
            <div className="py-10">
                <h3 className="text-title text-center">Like What You Get</h3>
                <p className="text-7xl text-center">+</p>
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
