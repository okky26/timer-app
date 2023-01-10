import { configureStore } from "@reduxjs/toolkit"
import timerSliceReducer from './timerSlice'

const timeStore = configureStore({
    reducer : {
        timerState : timerSliceReducer
    }
})

export default timeStore