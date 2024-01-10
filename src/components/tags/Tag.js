import { useDispatch, useSelector } from "react-redux";
import {
    resetPaginate,
    tagRemoved,
    tagSelected,
} from "../../features/filter/filterSlice";

export default function Tag({ id, title }) {
    const dispatch = useDispatch();
    const { tag: selectedTag } = useSelector((state) => state.filter);

    const isSelected = selectedTag === id ? true : false;

    const style = isSelected
        ? "bg-blue-600 text-white px-1.5 py-1 mr-2 rounded-md cursor-pointer"
        : "bg-blue-100 text-blue-600 px-1.5 py-1 mr-2 rounded-md cursor-pointer";

    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(id));
        } else {
            dispatch(tagSelected(id));
        }
        dispatch(resetPaginate());
    };

    return (
        <div className={style} onClick={handleSelect}>
            {title}
        </div>
    );
}
