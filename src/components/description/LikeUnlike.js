import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { like, unLike } from "../../features/video/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { getVideoLike, getVideoUnlike } from "../../features/video/videoAPI";

export default function LikeUnlike() {
    const dispatch = useDispatch();
    const { video } = useSelector((state) => state.video);

    const { id, likes, unlikes } = video || {};

    const videoLikeHandler = async () => {
        const newLikes = parseInt(likes + 1);
        const response = await getVideoLike({ id, likes: newLikes });
        dispatch(like(response.likes));
        // dispatch(videoLike({ id, likes: newLikes }));
    };

    const videoUnlikeHandler = async () => {
        const newUnlikes = parseInt(unlikes + 1);
        const response = await getVideoUnlike({ id, unlikes: newUnlikes });
        dispatch(unLike(response.unlikes));
        // dispatch(videoUnlike({ id, unlikes: newUnlikes }));
    };

    return (
        <div className="flex gap-10 w-48">
            <div
                className="flex gap-1 cursor-pointer"
                onClick={videoLikeHandler}
            >
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div
                className="flex gap-1 cursor-pointer"
                onClick={videoUnlikeHandler}
            >
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
