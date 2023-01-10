import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setMinuteDuration, setSecondDuration } from '../redux/duration'
// import { openTab } from '../redux/modal'
// import { setTimer } from '../redux/remainingTime'

const modalSetting = () => {

}

export default modalSetting

// const modalSetting = () => {
//   const timer = useSelector(state => state.type.timer)
//   const pomodoro = useSelector(state => state.type.podomoro)
//   const modal = useSelector(state => state.modal.openTab)
//   const minute = useSelector(state => state.duration.minuteDuration)
//   const second = useSelector(state => state.duration.secondDuration)
//   const dispatch = useDispatch()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setTimer(minute + second))
//     dispatch(openTab())
//   }

//   return (
//     <section className={`${modal === true ? 'block' : 'hidden'} absolute z-[3] w-full h-full bg-neutral-50/[.3] backdrop-blur-2xl`}>
//       <article className={'relative h-full flex items-center justify-center'}>
//         {timer === true && 
//         <>
//           <form onSubmit={handleSubmit} action="" className={'absolute flex flex-col items-center justify-center gap-4 bg-neutral-300 shadow-neo p-4 rounded-lg'}>
//             <h3 >Set Your Timer</h3> 
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Hour</label>
//                 <input type="number" />
//               </div>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Minute</label>
//                 <input type="number" onChange={(e) => dispatch(setMinuteDuration(e.target.value * 60))}/>
//               </div>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Second</label>
//                 <input type="number" onChange={(e) => dispatch(setSecondDuration(parseInt(e.target.value)))}/>
//               </div>
//               <div className={'grid grid-cols-2 gap-x-4'}>
//                 <input type="submit" value="Submit"className={'text-sm text-bold p-2 rounded bg-blue-600'} />
//                 <input type="reset" value="Cancel" className={'text-sm p-2 rounded bg-red-600 text-white'}/>
//               </div>
//         </form>
//         </>
//         }
//         {pomodoro === true && 
//         <>
//         <form action="" className={'absolute flex flex-col items-center justify-center gap-4 bg-neutral-300 shadow-neo p-4 rounded-lg'}>
//             <h3>Set Your Timer</h3>
//             <div className={'grid grid-cols-2 gap-4'}>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Hour</label>
//                 <input type="number" />
//               </div>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Minute</label>
//                 <input type="number" />
//               </div>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Second</label>
//                 <input type="number" />
//               </div>
//             </div>
//             <h3>Set Your Rest Timer</h3>
//             <div className={'grid grid-cols-2 gap-4'}>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Hour</label>
//                 <input type="number" />
//               </div>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Minute</label>
//                 <input type="number" />
//               </div>
//               <div className={'grid grid-rows-2'}>
//                 <label htmlFor="time">Second</label>
//                 <input type="number" />
//               </div>
//             </div>
//             <div className={'grid grid-cols-2 gap-x-4'}>
//               <input type="submit" value="Submit"className={'text-sm text-bold p-2 rounded bg-blue-600'} />
//               <input type="reset" value="Cancel" className={'text-sm p-2 rounded bg-red-600 text-white'}/>
//             </div>
//         </form>
//         </>
//         }
//       </article>
//     </section>
//   )
// }

// export default modalSetting