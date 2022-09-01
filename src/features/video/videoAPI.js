import axios from "../../utils/axios";
import { API_URL } from "../../utils/constant";

export const getVideo = async (id) => {
    const response = await axios.get(`/yt_videos/${id}`);

    return response.data;
};

export const getVideoLike = async ({ id, likes }) => {
    const response = await fetch(`${API_URL}/yt_videos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            likes: likes,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const getVideoUnlike = async ({ id, unlikes }) => {
    const response = await fetch(`${API_URL}/yt_videos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            unlikes: unlikes,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    const data = await response.json();
    return data;
};
