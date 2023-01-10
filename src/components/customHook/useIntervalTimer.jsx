import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { controlModal, controlTimer, decrementTimer, resetTimer, resetTimerDuration } from '../redux/timerSlice';
// import { resetDuration } from '../redux/duration';
// import { stopTimer } from '../redux/loading';
// import { openAlert } from '../redux/modal';
// import { decrementTimer } from '../redux/remainingTime';

const useIntervalTimer = () => {
    // 
    const loading = useSelector(state => state.timerState.timerLoad);
    // 
    const remainingTime = useSelector(state => state.timerState.remainingTime);
    // 
    const dispatch = useDispatch();

    const killTimer = () => {
      dispatch(resetTimerDuration());
      dispatch(controlTimer());
      dispatch(resetTimer());
    }

    useEffect(() => {
        let interval = null;
        
        if(loading === true && remainingTime > 0){
          interval = setInterval(() => dispatch(decrementTimer()), 1000)
        } else if (loading === false && remainingTime !== 0){
          clearInterval(interval)
        } else if(loading === true && remainingTime === 0){
            clearInterval(interval);
            killTimer();
            dispatch(controlModal());
        } return () => clearInterval(interval);
      },[remainingTime, loading]) 
}
  

export default useIntervalTimer