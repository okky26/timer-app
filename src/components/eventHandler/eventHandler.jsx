import React from 'react';
import Button from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import {  controlTimer, controlTimerAlert, openModeModal, openSettingModal, resetTimer, resetTimerDuration } from '../redux/timerSlice';
import useIntervalTimer from '../customHook/useIntervalTimer';
// import * as AI from 'react-icons/ai'
// import { IconContext } from 'react-icons'
// import { useDispatch,useSelector } from 'react-redux'
// import { startTimer, stopTimer } from '../redux/loading'
// import { resetTimer } from '../redux/remainingTime'
// import { openTab } from '../redux/modal'

const eventHandler = () => {
    // get time state from redux store
    const remainingTime = useSelector(state => state.timerState.remainingTime);
    // 
    const timerType = useSelector(state => state.timerState.timerType);
    // 
    const pomodoroType = useSelector(state => state.timerState.pomodoroType);
    // 
    const stopwatchType = useSelector(state => state.timerState.stopwatchType);
    // 
    const loading = useSelector(state => state.timerState.timerLoad);
    // using callback to call action from redux
    const dispatch = useDispatch();

    const settingEvent = () => {
        dispatch(openSettingModal());
        dispatch(resetTimerDuration());
    };

    const modeEvent = () => {
        dispatch(openModeModal());
    };

    if(timerType === true){
        useIntervalTimer()
    }else{return};

    const killTimer = () => {
        dispatch(resetTimerDuration());
        dispatch(controlTimer());
        dispatch(resetTimer());
    }

    const startApp = () => {
        dispatch(controlTimer());
        dispatch(controlTimerAlert());
    }

    // render component
    return(
        <>
            <article className='w-1/2 grid grid-cols-3 place-items-center gap-x-4'>
                <Button style={`w-3/4 h-3/4 rounded-full hover:bg-primary-color hover:text-primary-bg transition-all duration-700 border-primary-color border-2 bg-primary-bg flex items-center justify-center py-5 text-xl text-primary-color font-bold font-Inter outline-none shadow-primary`} event={modeEvent} content={'MODE'}/>
                <section className='w-3/4 h-3/4 relative flex items-center'>
                    <Button style={`absolute w-full h-full rounded-full flex items-center justify-center text-xl text-primary-dg ${loading === true ? 'translate-y-[150%]' : 'translate-y-0'} transition-all duration-500 font-Inter font-bold outline-none bg-primary-bg border-[1px] border-primary-dg`} event={() => dispatch(killTimer)} content={'RESET'}/>
                    {loading === false ? 
                        <>
                            <Button style={`absolute w-full h-full rounded-full ${remainingTime === 0 ? 'bg-disabled-start' : 'bg-primary-play-gr'} flex items-center justify-center text-xl text-neutral-50 font-Inter font-bold outline-none ${remainingTime === 0 ? 'pointer-events-none' : ''}`} event={startApp} content={'START'}/>
                        </>
                        :
                        <>
                            <Button style={`absolute w-full h-full rounded-full bg-primary-dg-gr flex items-center justify-center text-xl text-neutral-50 font-Inter font-bold outline-none `} event={() => dispatch(controlTimer())} content={'STOP'}/>
                        </>
                    }
                </section>
                <Button style={`w-3/4 h-3/4 rounded-full hover:bg-primary-color hover:text-primary-bg transition-all duration-700 border-primary-color border-2 bg-primary-bg  flex items-center justify-center py-5 text-xl text-primary-color font-bold font-Inter outline-none shadow-primary`} event={settingEvent} content={'SET TIMER'}/>
            </article>
        </>
    )
}

export default eventHandler;

// const eventHandler = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(state => state.loading.load)
//   const modal = useSelector(state => state.modal.openTab)
//   // useInterval()

//   return (
//     <nav className={'fixed grid grid-cols-3 grid-rows-1 bottom-0 w-full h-[10%] sm:h-[15%] bg-neutral-800 z-[4]'}>
//       <IconContext.Provider value={{size : '40px', color : `${modal === true ? 'black' : 'white'}` }}>
//         <div className={`w-full h-full flex items-center justify-center rounded-full`}>
//           <AI.AiFillSetting onClick={() => dispatch(openTab())} className={`cursor-pointer w-fit h-fit p-4 rounded-full transition-all duration-500 ${modal === true && 'bg-white'}`}/>
//         </div>
//       </IconContext.Provider>
//         <div className={'relative w-full h-full flex items-center justify-center'}>
//           <IconContext.Provider value={{size : '40px', color : '#ba040d' }}>
//           {loading === false ? 
//             <AI.AiOutlinePlayCircle
//             onClick={() => {dispatch(startTimer())}} 
//             className={'absolute translate-y-[-50%] w-fit h-fit p-4 rounded-full bg-neutral-800 cursor-pointer transition-all duration-500'}/>
//             :
//             <AI.AiTwotoneStop
//             onClick={() => {
//               dispatch(stopTimer());
//               dispatch(resetTimer());
//             }} 
//             className={'absolute translate-y-[-50%] w-fit h-fit p-4 rounded-full bg-neutral-800 cursor-pointer transition-all duration-500'}/>
//           }
//          </IconContext.Provider>
//          <IconContext.Provider value={{size : '38px', color : 'white'}}>
//           <AI.AiFillPauseCircle
//           onClick={() => {dispatch(stopTimer())}}
//           className={`absolute translate-y-[-125%] translate-x-[75%] w-fit h-fit p-3 rounded-full bg-neutral-800 cursor-pointer ${loading === false ? 'scale-0' : 'scale-100'} transition-all duration-500`}/>
//          </IconContext.Provider>
//         </div>
//       <IconContext.Provider value={{size : '40px', color : 'white' }}>
//         <div className={'w-full h-full flex items-center justify-center'}>
//           <AI.AiOutlineUnorderedList className={'cursor-pointer'} />
//         </div>
//       </IconContext.Provider>
//     </nav>
//   )
// }

// export default eventHandler