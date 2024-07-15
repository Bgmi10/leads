import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
         
        addtocart : (state , action) =>{
            state.items.push(action.payload)
        }
    }
})


export default cartSlice.reducer

export const {addtocart} = cartSlice.actions