import { createSlice } from "@reduxjs/toolkit";


const getfromlocastorage = () => {
    
    const localdata = localStorage.getItem('currentaddress') || null
     return  JSON.parse(localdata)
}
const Selectedaddressslice = createSlice({
    name : "selected",
    initialState : getfromlocastorage(),
    reducers : {
        selectedMessage : (state,action) => {
            const data = action.payload 
            localStorage.setItem('currentaddress' , JSON.stringify(data) || null )
            return data 
        }
    }
})



export default Selectedaddressslice.reducer

export const {selectedMessage} = Selectedaddressslice.actions