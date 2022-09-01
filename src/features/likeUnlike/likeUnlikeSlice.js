import { getVideoLike, getVideoUnlike } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    like: 0,
    unlike: 0,
    isLoading: false,
    isError: false,
    error: "",
};

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
    extraReducers: (builder) => {
        builder
            .addCase(videoLike.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(videoLike.fulfilled, (state, action) => {
                state.isLoading = false;
                state.like = action.payload;
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
                state.unlike = action.payload;
            })
            .addCase(videoUnlike.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
