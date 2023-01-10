import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
    name : 'type',
    initialState : {
        timer : true,
        podomoro : false,
        stopwatch : false
    },
    reducers : {
        typeTimer(state){
            state.timer = true
            state.podomoro = false
            state.stopwatch = false
        },
        typePodomoro(state){
            state.timer = false
            state.podomoro = true
            state.stopwatch = false
        },
        typeStopwatch(state){
            state.timer = false
            state.podomoro = false
            state.stopwatch = true
        }
    }
})

export const {typeTimer, typePodomoro, typeStopwatch} = typeSlice.actions
export default typeSlice.reducer