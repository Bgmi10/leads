import { createSlice } from "@reduxjs/toolkit";


const gettheitemfromlocalstorage = () => {
   
    try{
        const serilizeddata = localStorage.getItem('cartitems')

        if(serilizeddata === null) return []

        return JSON.parse(serilizeddata)
    }
    catch(err) {
         console.log(err)
    }
}

const savethedatatolocalstorage = (items) => {

    try{
       localStorage.setItem('cartitems' , JSON.stringify(items))
    }
    catch (err){
        console.log(err)
    }

}

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : gettheitemfromlocalstorage()
       
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
          savethedatatolocalstorage(state.items)
            
        },
        removefromcart : (state , action) =>{
            const id = action.payload 

            state.items = state.items.filter((i) => i.id !== id)

            savethedatatolocalstorage(state.items)
            
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
            savethedatatolocalstorage(state.items)
        }
    }
})




export default cartSlice.reducer

export const {addtocart , removefromcart , updateitemcartquantity } = cartSlice.actions