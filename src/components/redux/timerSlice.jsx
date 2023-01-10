import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name : 'timer',
    initialState : {
        timerDuration : {
            hour : 0,
            minute : 0,
            second : 0
        },
        pomodoroDuration : {
            pomodoroLoop : 0,
            pomodoroTaskDuration : {
                hour : 0,
                minute : 0,
                second : 0
            },
            pomodoroRestDuration : {
                hour : 0,
                minute : 0,
                second : 0
            }
        },
        timerLoad : false,
        remainingTime : 0,
        openModal : false,
        settingModal : false,
        modeModal : false,
        restAlert : false,
        timerAlert : false,
        stopwatchType : false,
        pomodoroType : false,
        timerType : true
    },
    reducers : {
        setTimerHourDuration(state, action){
            state.timerDuration.hour = action.payload * 3600
        },
        setTimerMinuteDuration(state, action){
            state.timerDuration.minute = action.payload * 60
        },
        setTimerSecondDuration(state, action){
            state.timerDuration.second = action.payload
        },
        resetTimerDuration(state){
            state.timerDuration.hour = 0,
            state.timerDuration.minute = 0,
            state.timerDuration.second = 0
        },
        setPomodoroTaskHourDuration(state, action){
            state.pomodoroDuration.pomodoroTaskDuration.hour = action.payload * 3600
        },
        setPomodoroTaskMinuteDuration(state, action){
            state.pomodoroDuration.pomodoroTaskDuration.minute = action.payload * 60
        },
        setPomodoroTaskSecondDuration(state, action){
            state.pomodoroDuration.pomodoroTaskDuration.second = action.payload
        },
        setPomodoroRestHourDuration(state, action){
            state.pomodoroDuration.pomodoroTaskDuration.hour = action.payload * 3600
        },
        setPomodoroRestMinuteDuration(state, action){
            state.pomodoroDuration.pomodoroTaskDuration.minute = action.payload * 60
        },
        setPomodoroRestSecondDuration(state, action){
            state.pomodoroDuration.pomodoroTaskDuration.second = action.payload
        },
        setPomodoroLoop(state, action){
            state.pomodoroDuration.pomodoroLoop = action.payload
        },
        resetPomodoroDuration(state){
            state.pomodoroDuration.pomodoroRestDuration.hour = 0,
            state.pomodoroDuration.pomodoroRestDuration.minute = 0,
            state.pomodoroDuration.pomodoroRestDuration.second = 0,
            state.pomodoroDuration.pomodoroTaskDuration.hour = 0,
            state.pomodoroDuration.pomodoroTaskDuration.minute = 0,
            state.pomodoroDuration.pomodoroTaskDuration.second = 0,
            state.pomodoroDuration.pomodoroLoop = 0
        },
        controlTimer(state){
            state.timerLoad = !state.timerLoad
        },
        controlTimerAlert(state){
            state.timerAlert = !state.timerAlert
        },
        setRemainingTime(state, action){
            state.remainingTime = action.payload
        },
        decrementTimer(state){
            state.remainingTime -= 1
        },
        incrementTimer(state){
            state.remainingTime += 1
        },
        resetTimer(state){
            state.remainingTime = 0
        },
        controlModal(state){
            state.openModal = !state.openModal
        },
        openSettingModal(state){
            state.settingModal = !state.settingModal
            state.openModal = !state.openModal
        },
        openModeModal(state){
            state.modeModal = !state.modeModal
            state.openModal = !state.openModal
        },
        controlRestTimer(state){
            state.restAlert = !state.restAlert
        },
        setTimerType(state){
            state.timerType = true,
            state.pomodoroType = false,
            state.stopwatchType = false
        },
        setPomodoroType(state){
            state.timerType = false,
            state.pomodoroType = true,
            state.stopwatchType = false
        },
        setStopwatchType(state){
            state.timerType = false,
            state.pomodoroType = false,
            state.stopwatchType = true
        }
    }
})

export const {controlTimerAlert, setTimerHourDuration, setTimerMinuteDuration, setTimerSecondDuration, setPomodoroLoop, setPomodoroRestHourDuration, setPomodoroRestMinuteDuration, setPomodoroRestSecondDuration, setPomodoroTaskHourDuration, setPomodoroTaskMinuteDuration, setPomodoroTaskSecondDuration, resetPomodoroDuration, resetTimerDuration, controlTimer, setRemainingTime, decrementTimer, incrementTimer, resetTimer, controlModal, openSettingModal, controlRestTimer, setTimerType, setPomodoroType, setStopwatchType, openModeModal} = timerSlice.actions

export default timerSlice.reducer