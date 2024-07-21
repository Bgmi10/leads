import { createSlice } from "@reduxjs/toolkit";

const searchcacheslice = createSlice({
    name : 'cacheslice',
    initialState : {
    },
    reducers : {
        cacheresult : (state ,action) => {
            const a = Object.assign( action.payload , state)
            return a 
        }
    }
})


export default searchcacheslice.reducer

export const {cacheresult} = searchcacheslice.actions