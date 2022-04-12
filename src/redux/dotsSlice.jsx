import { createSlice } from "@reduxjs/toolkit";

const dotsSlice = createSlice({
    name: "dots",
    initialState: {
        speed: 50,
        count: 100,
        maxDistance: 120,
        showDots: true,
        curved: false,
    },
    reducers: {
        setSpeed: (state, { payload }) => {
            state.speed = payload;
        },
        setCount: (state, { payload }) => {
            console.log(payload);
            state.count = payload;
        },
        setShowDots: (state, { payload }) => {
            state.showDots = payload;
        },
        setMaxDistance: (state, { payload }) => {
            state.maxDistance = payload;
        },
        setCurved: (state, { payload }) => {
            state.curved = payload;
        },
    },
});

export const { setSpeed, setCount, setShowDots, setMaxDistance, setCurved } = dotsSlice.actions;

export default dotsSlice.reducer;
