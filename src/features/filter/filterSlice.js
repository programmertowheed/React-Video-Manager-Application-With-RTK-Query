const { createSlice } = require("@reduxjs/toolkit");

const START = 0;
const END = 4;
const PERPAGE = 4;
const CPAGE = 1;

const initialState = {
    tags: [],
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
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        authorFiltered: (state, action) => {
            state.tags = [];
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
            state.tags = [];
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
