import { createSlice } from "@reduxjs/toolkit";

const producthoverslice = createSlice({
    name : 'hover' ,
    initialState : {
        hover : false
    },
    reducers : {
        producthover : (state) => {
            state.hover = !state.hover
        }
    }
})

export default producthoverslice.reducer

export const {producthover} = producthoverslice.actions