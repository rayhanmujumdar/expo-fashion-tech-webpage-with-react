import Title from "../ui/Title";

export default function ProductBanner() {
    return (
        <div className="bg-product-banner-bg-img w-full min-w-fit h-52 md:h-96 max-h-full bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col my-12 hover:bg-blend-darken relative after:absolute after:bg-white/50 after:w-full after:h-full">
            <Title>PRINT GRAPHICS</Title>
        </div>
    );
}
