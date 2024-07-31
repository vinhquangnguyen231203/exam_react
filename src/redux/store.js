import {configureStore} from '@reduxjs/toolkit'
import chemicalSlice from './chemicalSlice'

const store = configureStore({
    reducer: {
        'chemicals': chemicalSlice
    }
})

export default store