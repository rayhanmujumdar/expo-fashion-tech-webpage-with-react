import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react"

export default function PriceRange() {
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const priceRangeRef = useRef<HTMLDivElement>(null)
    const beforePriceRangeDotRef = useRef<HTMLDivElement>(null)
    const [percentage, setPercentage] = useState(0)
    const endPrice = 300
    const startPrice = Math.round((percentage / 100) * endPrice)
    const buttonMove = (clientX: number) => {
        const beforePriceRangeDot = beforePriceRangeDotRef.current;
        const priceBoundary = priceRangeRef.current!.getBoundingClientRect()
        const offsetX = clientX - priceBoundary.left
        const percentage = Math.round((offsetX / priceRangeRef.current!.clientWidth) * 100)
        if (percentage > 0 && percentage < 100) {
            setPercentage(percentage);
            beforePriceRangeDot!.style.left = `${percentage - 5}%`
        }
    }
    const priceRangeBtn = (e: ReactMouseEvent<HTMLDivElement>) => {
        setIsDragging(true)
        buttonMove(e.clientX);
    }
    useEffect(() => {
        const handleMouseUp = () => {
            setIsDragging(false)
        }
        const handleMouseOver = (e: MouseEvent) => {
            if (isDragging) {
                buttonMove(e.clientX)
            }
        }
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mouseover', handleMouseOver)
        return () => {
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseover', handleMouseOver)
        }
    }, [isDragging])
    return (
        <div className="flex justify-center sm:justify-end items-center gap-x-5">
            <p className="uppercase">price</p>
            <div className="flex items-center space-x-5 py-3">
                <p className="bg-[#DDDADB] px-2 rounded-md">{startPrice}$</p>
                <div
                    ref={priceRangeRef}
                    className="w-40 h-5 flex justify-center items-center cursor-pointer"
                    onMouseDown={priceRangeBtn}
                >
                    <div className="w-full h-1 bg-gray-500 relative cursor-pointer">
                        <div ref={beforePriceRangeDotRef} className="before-price-ranger"></div>
                        <div className="after-price-ranger"></div>
                    </div>
                </div>
                <span className="bg-[#DDDADB] px-2 rounded-md">{endPrice}$</span>
            </div>
        </div>
    )
}
