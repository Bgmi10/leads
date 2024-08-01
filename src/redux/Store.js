import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import Searchcacheslice from './Searchcacheslice'
import multiimgslice from './multiimgslice'
import producthoverslice from './producthoverslice'

const store = configureStore({

    reducer :{  

        cart : cartSlice,
        cacheresults : Searchcacheslice,
        multiimg : multiimgslice,
        producthover : producthoverslice

    }
})

export default store