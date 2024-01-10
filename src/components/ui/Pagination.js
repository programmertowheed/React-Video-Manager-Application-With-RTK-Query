import { useDispatch, useSelector } from "react-redux";
import { currentPage, paginate } from "../../features/filter/filterSlice";

export default function Pagination() {
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state.videos);
    const { cPage, parPage, start, end } = useSelector((state) => state.filter);

    const handlePaginate = (currPage) => {
        dispatch(currentPage(currPage));
        const videoPerPage = parPage;
        const endVideo = parseInt(currPage * videoPerPage);
        const startVideo = parseInt(endVideo - videoPerPage);
        dispatch(paginate({ start: startVideo, end: endVideo }));
    };

    let pageArray = [];

    if (videos?.length > parPage) {
        const totalPage = Math.ceil(videos.length / parPage);
        for (let i = 1; i <= totalPage; i++) {
            pageArray.push(i);
        }
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex flex-col md:flex-row gap-4 md:justify-between">
                <div>
                    Showing {start + 1} to{" "}
                    {end > videos?.length ? videos?.length : end} of{" "}
                    {videos?.length} entries
                </div>
                <div className="flex gap-2">
                    {pageArray?.map((page) => (
                        <div
                            key={page}
                            className={
                                cPage === page
                                    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                                    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
                            }
                            onClick={() => handlePaginate(page)}
                        >
                            {page}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
