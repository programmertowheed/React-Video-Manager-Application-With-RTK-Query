const { createSlice } = require("@reduxjs/toolkit");

const START = 0;
const END = 8;
const PERPAGE = 8;
const CPAGE = 1;

const initialState = {
    tag: undefined,
    search: "",
    author: "",
    start: START,
    end: END,
    parPage: PERPAGE,
    cPage: CPAGE,
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tag = action.payload;
        },
        tagRemoved: (state) => {
            state.tag = undefined;
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        authorFiltered: (state, action) => {
            state.tag = undefined;
            state.search = "";
            state.author = action.payload;
        },
        currentPage: (state, action) => {
            state.cPage = action.payload;
        },
        paginate: (state, action) => {
            const { start, end } = action.payload;
            state.start = start;
            state.end = end;
        },
        resetPaginate: (state, action) => {
            state.start = START;
            state.end = END;
            state.parPage = PERPAGE;
            state.cPage = CPAGE;
        },
        cleared: (state, action) => {
            state.tag = undefined;
            state.search = "";
            state.author = "";
            state.start = START;
            state.end = END;
            state.parPage = PERPAGE;
            state.cPage = CPAGE;
        },
    },
});

export default filterSlice.reducer;
export const {
    tagSelected,
    tagRemoved,
    searched,
    cleared,
    authorFiltered,
    paginate,
    resetPaginate,
    currentPage,
} = filterSlice.actions;
