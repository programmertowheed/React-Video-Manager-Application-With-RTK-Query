import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(
        (state) => state.videos
    );
    const { tag, search, author, start, end } = useSelector(
        (state) => state.filter
    );

    useEffect(() => {
        dispatch(fetchVideos({ tag, search, author }));
    }, [dispatch, tag, search, author]);

    // decide what to render
    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    if (!isError && !isLoading && videos?.length > 0) {
        let paginateVideo = [...videos];
        paginateVideo = paginateVideo.slice(start, end);
        content = paginateVideo?.map((video) => (
            <VideoGridItem key={video.id} video={video} />
        ));
    }

    return (
        <section className="pt-6">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                {content}
            </div>
        </section>
    );
}
