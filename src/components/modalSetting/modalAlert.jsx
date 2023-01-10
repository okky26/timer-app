import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {AiFillCloseCircle} from 'react-icons/ai'
// import { IconContext } from 'react-icons'
// import { openAlert } from '../redux/modal'



// const modalAlert = () => {
//     const alert = useSelector(state => state.modal.openAlert)
//     const podomoro = useSelector(state => state.type.podomoro)
//     const timer = useSelector(state => state.type.timer)
//     const dispatch = useDispatch()
//     // 
//   return (
//     <section className={`${alert === true ? 'block' : 'hidden'} absolute z-[3] w-full h-full bg-neutral-50/[.3] backdrop-blur-2xl`}>
//         <article className={'relative h-full flex items-center justify-center'}>
//             <div className={'absolute z-[5] -translate-y-[120%] translate-x-[700%]'}>
//                 <IconContext.Provider value={{size : '48', color : 'red'}}>
//                     <AiFillCloseCircle onClick={() => dispatch(openAlert())} className={'cursor-pointer'}/>
//                 </IconContext.Provider>
//             </div>
//             <div className={'absolute flex items-center justify-center w-1/2 h-1/6 rounded p-4 bg-neo'}>
//                 <h3 className={'text-5xl'}>Your Time Is Up</h3>
//             </div>
//         </article>       
//     </section>
//   )
// }

// export default modalAlert