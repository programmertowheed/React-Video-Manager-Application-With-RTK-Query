import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    authorFiltered,
    resetPaginate,
} from "../../features/filter/filterSlice";

export default function VideoGridItem({ video = {} }) {
    const dispatch = useDispatch();

    const { id, thumbnail, title, duration, author, avatar, views, date } =
        video;

    const handleAuthorFilter = (author) => {
        dispatch(authorFiltered(author));
        dispatch(resetPaginate());
    };

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`videos/${id}`}>
                        <img
                            src={thumbnail}
                            className="w-full h-auto"
                            alt={title}
                        />
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        {duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <span
                        onClick={() => handleAuthorFilter(author)}
                        className="shrink-0 cursor-pointer"
                    >
                        <img
                            src={avatar}
                            className="rounded-full h-6 w-6"
                            alt={author}
                        />
                    </span>

                    <div clas="flex flex-col">
                        <Link to={`videos/${id}`}>
                            <p className="text-slate-900 text-sm font-semibold">
                                {title}
                            </p>
                        </Link>
                        <span
                            className="text-gray-400 text-xs mt-2 hover:text-gray-600 cursor-pointer"
                            onClick={() => handleAuthorFilter(author)}
                        >
                            {author}
                        </span>
                        <p className="text-gray-400 text-xs mt-1">
                            {views} views . {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
