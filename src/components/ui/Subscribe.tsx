
export default function Subscribe() {
    return (
        <div className="bg-[#f3f3f3] py-10 flex justify-center items-center flex-col">
            <h1 className="text-4xl mb-5">Subscribe to our news</h1>
            <div>
                <input type="text" className="border border-gray-500 py-2 w-[450px] pl-1 text-xl" />
                <button type="submit" className="border border-black/50 border-l-0 py-2 text-xl px-5">Subscribe</button>
            </div>
        </div>
    )
}
