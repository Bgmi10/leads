import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import Searchcacheslice from './Searchcacheslice'

const store = configureStore({

    reducer :{  

        cart : cartSlice,
        cacheresults : Searchcacheslice

    }
})

export default store