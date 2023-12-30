import { MouseEvent, useState } from "react";

export default function PagePagination() {
    const pageJump = 5;
    const totalPage = 50;
    const pages = [...new Array(totalPage).keys()];
    const [isStopNextPage, setIsStopNextPage] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [prevPage, setPrevPage] = useState(page - pageJump);
    const handleNextPage = (e: MouseEvent<HTMLLIElement>) => {
        const pageNumber = Number(e.currentTarget.innerText);
        if ((pageNumber + pageJump) >= totalPage) {
            setIsStopNextPage(true);
            setPage(totalPage - pageJump);
        } else {
            setIsStopNextPage(false);
            setPrevPage(pageNumber);
            setPage(pageNumber);
        }
    };
    const handlePrevPage = () => {
        if ((prevPage - pageJump) < 0) {
            setPage(0);
        } else {
            setIsStopNextPage(false);
            setPage(prevPage - pageJump);
            setPrevPage(page - pageJump);
        }
    };
    const handleLastPage = (e: MouseEvent<HTMLLIElement>) => {
        const lastPage = Number(e.currentTarget.innerText)
        setIsStopNextPage(true);
        setPage(totalPage - pageJump);
        setPrevPage(lastPage - pageJump)
    }
    return (
        <div className="py-4">
            <ul className="flex space-x-2 justify-end">
                {page > 0 && (
                    <li onClick={handlePrevPage} className="cursor-pointer">
                        prev
                    </li>
                )}
                {pages.slice(page, page + pageJump).map((page: number) => {
                    return (
                        <li className="cursor-pointer" onClick={handleNextPage}>
                            {page + 1}
                        </li>
                    );
                })}
                {!isStopNextPage && (
                    <>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                        <li className="cursor-pointer" onClick={handleLastPage}>
                            {pages.length}
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}
