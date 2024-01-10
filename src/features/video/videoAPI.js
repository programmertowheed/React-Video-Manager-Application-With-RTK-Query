import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

export const getVideoLike = async ({ id, likes }) => {
    const response = await axios.put(`/videos/${id}`, { likes });
    return response.data;
};

export const getVideoUnlike = async ({ id, unlikes }) => {
    const response = await axios.put(`/videos/${id}`, { unlikes });
    return response.data;
};
