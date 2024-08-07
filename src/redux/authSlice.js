import { createSlice } from "@reduxjs/toolkit";


const chechthedatafromwebstorage = () => {

    const user = localStorage.getItem('user') 

    const usertoken = sessionStorage.getItem('usertoken') 
    
    return {
        user : JSON.parse(user) || null,
        usertoken : usertoken || null,
        isAuthenticated : user && true || false
    }

    
}

const authSlice = createSlice({
    name : 'auth',
    initialState : chechthedatafromwebstorage(),

    reducers : {

        register : (state , action) => {
                
            state.token = action.payload.token
            state.user = action.payload.user
            state.isAuthenticated = true 

            localStorage.setItem('user' , JSON.stringify(action.payload.user))
            

        },


        login : (state , action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            state.isAuthenticated = true

            localStorage.setItem('user' , JSON.stringify(action.payload.user))
           

        } ,

        logout : (state ) => {
            state.isAuthenticated = false 
            state.token = null
            state.user = null

            localStorage.removeItem('user')
            sessionStorage.removeItem('usertoken')
           
        }
    }
})



export default authSlice.reducer

export const {register , login , logout} = authSlice.actions