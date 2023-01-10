import React from 'react';
import { IconContext } from 'react-icons';
import * as AI from 'react-icons/ai';
// import * as AI from 'react-icons/ai'
// import { FaStopwatch } from 'react-icons/fa'
// import { BsFillAlarmFill } from 'react-icons/bs'
// import { IconContext } from 'react-icons'
import { useDispatch, useSelector } from 'react-redux';
import { controlModal, controlTimerAlert, openModeModal, openSettingModal, resetTimerDuration, setPomodoroType, setRemainingTime, setStopwatchType, setTimerHourDuration, setTimerMinuteDuration, setTimerSecondDuration, setTimerType } from '../redux/timerSlice';
// import { typePodomoro, typeStopwatch, typeTimer } from '../redux/type'
// import { Link } from 'react-router-dom'
// import { setPomodoroAlert, setTimerAlert } from '../redux/modal'

const modal = () => {
    // 
    const timerType = useSelector(state => state.timerState.timerType);
    // 
    const pomodoroType = useSelector(state => state.timerState.pomodoroType);
    // 
    const stopwatchType = useSelector(state => state.timerState.stopwatchType);
    // 
    const modalState = useSelector(state => state.timerState.openModal);
    // 
    const settingModal = useSelector(state => state.timerState.settingModal);
    // 
    const modeModal = useSelector(state => state.timerState.modeModal);
    // 
    const timerAlert = useSelector(state => state.timerState.timerAlert);
    // 
    const timerHour = useSelector(state => state.timerState.timerDuration.hour);
    // 
    const timerMinute = useSelector(state => state.timerState.timerDuration.minute);
    // 
    const timerSecond = useSelector(state => state.timerState.timerDuration.second);
    // 
    const dispatch = useDispatch();

    const timerSubmitForm = (e) => {
        e.preventDefault();
        dispatch(setRemainingTime(timerHour + timerMinute + timerSecond));
        dispatch(openSettingModal())
    }
    const closeModalAlert = () => {
        dispatch(controlModal());
        dispatch(controlTimerAlert());
    }

    return (
        <>
            <article className={`absolute w-screen ${modalState === false ? 'scale-0' : 'scale-100'} h-screen z-10 bg-neutral-50/40 backdrop-blur-xl flex items-center justify-center transition-all duration-700`}>
                {modeModal === true &&
                    <div className='relative w-screen h-screen flex items-center justify-center'>
                        <section className='absolute w-12 h-12 bg-primary-dg-gr shadow-xl rounded-full flex items-center justify-center cursor-pointer top-16 right-40' onClick={() => dispatch(openModeModal())}>
                            <h2 className='text-2xl font-Inter font-bold text-neutral-800'>X</h2>
                        </section>
                        <section className='w-3/4 h-3/4 bg-primary-modal rounded-3xl shadow-md grid grid-rows-2 place-items-center p-4'>
                            <div className='w-full h-1/6 flex items-center justify-center'>
                                <h2 className='text-3xl font-Inter font-bold text-neutral-800'>CHOOSE YOUR MODE</h2>
                            </div>
                            <div className='w-full h-full grid grid-cols-3 place-items-center gap-x-4 px-4'>
                                 <div className='w-full h-full flex flex-col items-center justify-evenly rounded-xl p-2 shadow-inner'>
                                    <IconContext.Provider value={{size : '32px'}}>
                                        <AI.AiOutlineClockCircle/>
                                    </IconContext.Provider>
                                    <h2 className='text-2xl font-Inter text-neutral-800 font-bold'>TIMER</h2>
                                    <div className='w-full h-1/4 relative flex items-center justify-center'>
                                        <div className='flex items-center justify-center w-1/3 h-8 bg-neutral-900 rounded-full'>
                                            <div className={`relative flex items-center justify-center w-3/4 h-3/4  rounded-full ${timerType === true ? 'bg-green-600' : 'bg-neutral-50'} transition-all duration-700 delay-500`}>
                                                <div className={`absolute w-10 h-10 rounded-full bg-primary-modal shadow-lg ${timerType === true ? 'translate-x-3/4' : '-translate-x-3/4'} transition-transform duration-700 cursor-pointer`} onClick={() => dispatch(setTimerType())}></div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                 <div className='w-full h-full flex flex-col items-center justify-evenly rounded-xl p-2 shadow-inner'>
                                    <IconContext.Provider value={{size : '32px'}}>
                                        <AI.AiOutlineClockCircle/>
                                    </IconContext.Provider>
                                    <h2 className='text-2xl font-Inter text-neutral-800 font-bold'>POMODORO</h2>
                                    <div className='w-full h-1/4 relative flex items-center justify-center'>
                                        <div className='flex items-center justify-center w-1/3 h-8 bg-neutral-900 rounded-full'>
                                            <div className={`relative flex items-center justify-center w-3/4 h-3/4  rounded-full ${pomodoroType === true ? 'bg-green-600' : 'bg-neutral-50'} transition-all duration-700 delay-500`}>
                                                <div className={`absolute w-10 h-10 rounded-full bg-primary-modal shadow-lg ${pomodoroType === true ? 'translate-x-3/4' : '-translate-x-3/4'} transition-transform duration-700 cursor-pointer`} onClick={() => dispatch(setPomodoroType())}></div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                 <div className='w-full h-full flex flex-col items-center justify-evenly rounded-xl p-2 shadow-inner'>
                                    <IconContext.Provider value={{size : '32px'}}>
                                        <AI.AiOutlineClockCircle/>
                                    </IconContext.Provider>
                                    <h2 className='text-2xl font-Inter text-neutral-800 font-bold'>STOPWATCH</h2>
                                    <div className='w-full h-1/4 relative flex items-center justify-center'>
                                        <div className='flex items-center justify-center w-1/3 h-8 bg-neutral-900 rounded-full'>
                                            <div className={`relative flex items-center justify-center w-3/4 h-3/4  rounded-full ${stopwatchType === true ? 'bg-green-600' : 'bg-neutral-50'} transition-all duration-700 delay-500`}>
                                                <div className={`absolute w-10 h-10 rounded-full bg-primary-modal shadow-lg ${stopwatchType === true ? 'translate-x-3/4' : '-translate-x-3/4'} transition-transform duration-700 cursor-pointer`} onClick={() => dispatch(setStopwatchType())}></div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </section>
                    </div>
                }
                {
                    settingModal === true && timerType === true && 
                    <>
                        <div className='relative w-screen h-screen flex items-center justify-center'>
                            <section className='absolute w-12 h-12 bg-primary-dg-gr shadow-xl rounded-full flex items-center justify-center cursor-pointer top-32 right-[31rem]' onClick={() => dispatch(openSettingModal())}>
                                <h2 className='text-2xl font-Inter font-bold text-neutral-800'>X</h2>
                            </section>
                            <section className='w-1/4 h-[60%] bg-primary-modal shadow-xl flex flex-col items-center justify-center rounded-3xl p-2 gap-y-4'>
                                <h2 className='text-xl font-Inter font-bold text-neutral-800'>SET YOUR TIMER</h2>
                                <form action="" onSubmit={timerSubmitForm} className='w-full h-3/4 px-12 flex flex-col justify-evenly items-center'>
                                    <div className='relative flex flex-col items-center justify-center'>
                                        <label htmlFor="hour" className=' group-focus:-translate-y-full peer-focus:text-tertier text-xs font-Inter font-bold text-neutral-500 absolute z-10'>HOUR</label>
                                        <input onChange={(e) => dispatch(setTimerHourDuration(parseInt(e.target.value)))} type="number" id='hour' className='group h-8 focus:outline-tertier bg-neutral-300 shadow-inner rounded-full px-2 absolute' />
                                    </div>
                                    <div className='relative flex flex-col items-center justify-center'>
                                        <label htmlFor="minute" className=' group-focus:-translate-y-full peer-focus:text-tertier text-xs font-Inter font-bold text-neutral-500 absolute z-10'>MINUTE</label>
                                        <input onChange={(e) => dispatch(setTimerMinuteDuration(parseInt(e.target.value)))} type="number" id='minute' className='group h-8 focus:outline-tertier bg-neutral-300 shadow-inner rounded-full px-2 absolute' />
                                    </div>
                                    <div className='relative flex flex-col items-center justify-center'>
                                        <label htmlFor="second" className=' group-focus:-translate-y-full peer-focus:text-tertier text-xs font-Inter font-bold text-neutral-500 absolute z-10'>SECOND</label>
                                        <input onChange={(e) => dispatch(setTimerSecondDuration(parseInt(e.target.value)))} type="number" id='second' className='group h-8 focus:outline-tertier bg-neutral-300 shadow-inner rounded-full px-2 absolute' />
                                    </div>
                                    <div className='w-full flex items-center justify-end gap-x-4'>
                                        <input className='px-4 py-2 bg-primary-color text-base text-neutral-800 cursor-pointer font-Inter rounded-full' type="submit" value="Submit" />
                                        <input onClick={() => dispatch(resetTimerDuration())} className='px-4 py-2 border-[1px] border-primary-dg text-base text-primary-dg cursor-pointer font-Inter rounded-full' type="reset" value="Cancel" />
                                    </div>
                                </form>
                            </section>
                        </div>
                    </>
                }
                {timerAlert === true && settingModal == false && modeModal === false &&
                    <>
                        <div className='relative w-screen h-screen flex items-center justify-center'>
                            <section className='absolute w-12 h-12 bg-primary-dg-gr shadow-xl rounded-full flex items-center justify-center cursor-pointer top-60 right-80' onClick={closeModalAlert}>
                                <h2 className='text-2xl font-Inter font-bold text-neutral-800'>X</h2>
                            </section>
                            <section className='w-1/2 h-1/4 bg-primary-modal shadow-xl flex flex-col items-center justify-center rounded-3xl p-8 gap-y-4'>
                                <h2 className='text-3xl font-Inter font-bold text-neutral-800'>YOUR TIMER HAS ENDED</h2>
                            </section>
                        </div>
                    </>
                }
            </article>
        </>
    )



}
export default modal;

// const typeController = () => {
//     const timerType = useSelector(state => state.type.timer)
//     const podomoroType = useSelector(state => state.type.podomoro)
//     const stopwatchType = useSelector(state => state.type.stopwatch)
//     const dispatch = useDispatch()

//   return (
//     <div className={'w-[50%] h-[10%] fixed bottom-1/3 left-1/4 grid grid-cols-3 grid-rows-1 place-items-center gap-x-4 z-[2]'}>
//         <Link to={'/'} onClick={() => {dispatch(typeTimer()); dispatch(setTimerAlert())}} className={`group relative w-full h-full flex items-center justify-center cursor-pointer`}>
//             <div className={`absolute w-[90%] h-[90%] bg-purple-600 -skew-x-12 ${timerType === true ? 'translate-y-1 scale-75' : '' } group-hover:translate-y-1 group-hover:scale-75 transition-all duration-500`}></div>
//             <div className={`absolute flex items-center justify-center gap-x-2 z-[2] w-[90%] h-[90%] bg-transparent border-neutral-50 border-solid border-2 -skew-x-12 group-hover:-translate-y-3 group-hover:scale-90 transition-all duration-500 ${timerType === true ? '-translate-y-3 scale-90' : '' }`}>
//                 <IconContext.Provider value={{size : '26px', color : 'white'}}>
//                     <AI.AiOutlineFieldTime/>
//                 </IconContext.Provider>
//                 <p className={`font-sans text-xl text-neutral-50`}>Timer</p>
//             </div>
//         </Link>
//         <Link to={'/podomoro'} onClick={() => {dispatch(typePodomoro()); dispatch(setPomodoroAlert())} } className={`group relative w-full h-full flex items-center justify-center cursor-pointer`}>
//             <div className={`absolute w-[90%] h-[90%] bg-sky-600 -skew-x-12 group-hover:translate-y-1 group-hover:scale-75 transition-all duration-500 ${podomoroType === true ? 'translate-y-1 scale-75' : '' }`}></div>
//             <div className={`absolute flex items-center justify-center gap-x-2 z-[2] w-[90%] h-[90%] bg-transparent border-neutral-50 border-solid border-2 -skew-x-12 group-hover:-translate-y-3 group-hover:scale-90 transition-all duration-500 ${podomoroType === true ? '-translate-y-3 scale-90' : '' }`}>
//                 <IconContext.Provider value={{size : '26px', color : 'white'}}>
//                     <BsFillAlarmFill/>
//                 </IconContext.Provider>
//                 <p className={`font-sans text-xl text-neutral-50`}>Pomodoro</p>
//             </div>
//         </Link>
//         <Link to={'/stopwatch'} onClick={() => dispatch(typeStopwatch())} className={`group relative w-full h-full flex items-center justify-center cursor-pointer`}>
//             <div className={`absolute w-[90%] h-[90%] bg-green-600 -skew-x-12 group-hover:translate-y-1 group-hover:scale-75 transition-all duration-500 ${stopwatchType === true ? 'translate-y-1 scale-75' : '' }`}></div>
//             <div className={`absolute flex items-center justify-center gap-x-2 z-[2] w-[90%] h-[90%] bg-transparent border-neutral-50 border-solid border-2 -skew-x-12 group-hover:-translate-y-3 group-hover:scale-90 transition-all duration-500 ${stopwatchType === true ? '-translate-y-3 scale-90' : '' }`}>
//                 <IconContext.Provider value={{size : '26px', color : 'white'}}>
//                     <FaStopwatch/>
//                 </IconContext.Provider>
//                 <p className={`font-sans text-xl text-neutral-50`}>Stopwatch</p>
//             </div>
//         </Link>
//     </div>
//   )
// }

// export default typeController