import axios from "../../utils/axios";

export const getVideos = async (tags, search, author) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (author !== "") {
        const authorText = author.split(" ");
        let authorQuery =
            authorText?.length > 0
                ? authorText?.map((text) => `author_like=${text}`).join("&")
                : "";
        if (tags?.length > 0) {
            queryString = queryString + "&" + authorQuery;
        } else {
            queryString = queryString + authorQuery;
        }
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    // if (queryString !== "") {
    //     queryString += `&_page=${currentPage}&_limit=${limit}`;
    // } else {
    //     queryString += `_page=${currentPage}&_limit=${limit}`;
    // }

    const response = await axios.get(`/yt_videos/?${queryString}`);

    return response.data;
};
