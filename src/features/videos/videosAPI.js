import axios from "../../utils/axios";

export const getVideos = async (tag, search, author) => {
    let queryString = "";

    if (tag !== undefined) {
        queryString += `tag=${tag}`;
    }

    if (author !== "") {
        let authorQuery = `author=${author}`;
        if (tag !== undefined) {
            queryString = queryString + "&" + authorQuery;
        } else {
            queryString = queryString + authorQuery;
        }
    }

    if (search !== "") {
        if (tag !== undefined || author !== "") {
            queryString += `&q=${search}`;
        } else {
            queryString += `q=${search}`;
        }
    }

    // if (queryString !== "") {
    //     queryString += `&_page=${currentPage}&_limit=${limit}`;
    // } else {
    //     queryString += `_page=${currentPage}&_limit=${limit}`;
    // }

    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};
