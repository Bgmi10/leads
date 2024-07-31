import { createSlice } from "@reduxjs/toolkit";

const multiimgslice = createSlice({
    name : 'multiimg',
    initialState : '',
    reducers : {
        addimg : (state , action ) => {
           return action.payload
        }
    }
})

export default multiimgslice.reducer

export const {addimg} = multiimgslice.actions