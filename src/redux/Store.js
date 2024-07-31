import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import Searchcacheslice from './Searchcacheslice'
import multiimgslice from './multiimgslice'

const store = configureStore({

    reducer :{  

        cart : cartSlice,
        cacheresults : Searchcacheslice,
        multiimg : multiimgslice

    }
})

export default store