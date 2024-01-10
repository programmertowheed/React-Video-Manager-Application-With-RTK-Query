import { getVideo, getVideoLike, getVideoUnlike } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video.data;
});

// async thunk
export const videoLike = createAsyncThunk(
    "video/like",
    async ({ id, likes }) => {
        const response = await getVideoLike({ id, likes });
        return response.likes;
    }
);

// async thunk
export const videoUnlike = createAsyncThunk(
    "video/unlike",
    async ({ id, unlikes }) => {
        const response = await getVideoUnlike({ id, unlikes });
        return response.unlikes;
    }
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        like: (state, action) => {
            state.video.likes = action.payload;
        },
        unLike: (state, action) => {
            state.video.unlikes = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });

        builder
            .addCase(videoLike.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(videoLike.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.video.likes = action.payload;
            })
            .addCase(videoLike.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });

        builder
            .addCase(videoUnlike.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(videoUnlike.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.video.unlikes = action.payload;
            })
            .addCase(videoUnlike.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
export const { like, unLike } = videoSlice.actions;
