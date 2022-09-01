import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import { cleared } from "../../features/filter/filterSlice";
import Tag from "./Tag";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const handleTagClear = () => {
        dispatch(cleared());
    };

    return tags?.length > 0 ? (
        <section>
            <div className="flex justify-between max-w-7xl mx-auto px-5 py-6 lg:px-0 gap-2 border-b overflow-y-auto">
                <div className="flex">
                    {tags.map((tag) => (
                        <Tag key={tag.id} title={tag.title} />
                    ))}
                </div>
                <button
                    onClick={handleTagClear}
                    className="bg-red-500 text-white px-4 py-1 rounded-full cursor-pointer"
                >
                    Reset Filter
                </button>
            </div>
        </section>
    ) : null;
}
