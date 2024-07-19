import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
         
        addtocart : (state , action) =>{
            const item = action.payload

            const existingitemindex = state.items.findIndex(i => i.id === item.id)

            if(existingitemindex !== -1 ){
                state.items[existingitemindex].quantity += 1


            }
            else{
                state.items.push({...item , quantity : 1  })
            }
        },
        removefromcart : (state , action) =>{
            const id = action.payload 

            state.items = state.items.filter((i) => i.id !== id)
        },
        updateitemcartquantity : (state , action) => {
            const {id , quantity } = action.payload

            const existingitemindex = state.items.findIndex(i => i.id === id)

            if(existingitemindex !== -1 ) {
                if(quantity > 0) {
                        state.items[existingitemindex].quantity = quantity

                }

                else{

                    state.items.splice(existingitemindex , 1 )
                }
            }
        }
    }
})


export default cartSlice.reducer

export const {addtocart , removefromcart , updateitemcartquantity } = cartSlice.actions