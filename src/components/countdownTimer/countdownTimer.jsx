import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { decrementTimer, setTimer } from '../redux/remainingTime';
// import useInterval from '../customHook/useInterval';
// import TypeController from '../typeController/typeController';
// import ModalSetting from '../modalSetting/modalSetting';
// import ModalAlert from '../modalSetting/modalAlert';







const countdownTimer = () => {
  
  // get remaining time state from store
  const remainingTime = useSelector(state => state.timerState.remainingTime)
  // using callback to call action from redux
  const dispatch = useDispatch();

  console.log(remainingTime)

  // formating hour from remaining time by divide it with 3600 sec
  const hourFormating = remainingTime => {
    const hour = Math.floor(remainingTime / 3600)
    return `${hour < 10 ? '0' + hour : hour}`
  };
  // formating minute from remaining time by divide it with 60 sec
  const minuteFormating = remainingTime => {
    let minute = '';
    if(remainingTime >= 3600){
      minute = Math.floor((remainingTime / 60) % 60)
    } else {minute = Math.floor(remainingTime / 60)};
    return `${minute < 10 ? '0' + minute : minute}`
  };
  // formating second from remaining time by using modulo function to keep the second under 60
  const secondFormating = remainingTime => {
    const second = remainingTime % 60
    return `${second < 10 ? '0' + second : second}`
  };

  // rendering user interface for timer only
  return (
    <>
      <article className='w-1/2 h-1/4 flex items-center justify-center rounded-full bg-primary-dark-bg p-4'>
        <section className='w-full h-full grid grid-cols-5 place-items-center px-8 py-4 bg-primary-gr rounded-full'>
          <div className='w-full h-full flex items-center justify-center gap-x-4'>
            <div className='w-3/4 h-full flex items-center justify-center'>
              <h2 className='text-7xl font-Radio text-primary-bg'>{remainingTime === 0 ? '00' : hourFormating(remainingTime)}</h2>
            </div>
            <h3 className='text-2xl font-Radio text-primary-bg'>H</h3>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
            <h2 className='text-7xl font-Radio text-primary-bg'>:</h2>
          </div>
          <div className='w-full h-full flex items-center justify-center gap-x-4'>
            <div className='w-3/4 h-full flex items-center justify-center'>
              <h2 className='text-7xl font-Radio text-primary-bg'>{remainingTime === 0 ? '00' : minuteFormating(remainingTime)}</h2>
            </div>
            <h3 className='text-2xl font-Radio text-primary-bg'>M</h3>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
            <h2 className='text-7xl font-Radio text-primary-bg'>:</h2>
          </div>
          <div className='w-full h-full flex items-center justify-center gap-x-4'>
            <div className='w-3/4 h-full flex items-center justify-center'>
              <h2 className='text-7xl font-Radio text-primary-bg'>{remainingTime === 0 ? '00' : secondFormating(remainingTime)}</h2>
            </div>
            <h3 className='text-2xl font-Radio text-primary-bg'>S</h3>
          </div>
        </section>
      </article>
    </>
  )


  // return (
  //   <>
  //     <ModalAlert/>
  //     <ModalSetting/>
  //     <div className={'absolute w-full h-full flex flex-col items-center justify-center'}>
  //       <section className={'w-full h-[80%] flex flex-col items-center justify-center'}>
  //         <article id='timer' className={'w-[90%] grid grid-cols-5 grid-rows-2 h-1/4 place-items-center'}>
  //           <div className={'w-full h-1/2 flex items-center justify-center gap-x-1'}>
  //             <h2 className={'text-neutral-50 font-Radio text-6xl'}>00</h2>
  //             <h3 className={'text-neutral-50 font-Radio text-2xl'}>h</h3>
  //           </div>
  //           <h2 className={'text-neutral-50 font-Radio text-6xl'}>:</h2>
  //           <div className={'w-full h-1/2 p-2 flex items-center justify-center gap-x-1'}>
  //             <h2 className={'text-neutral-50 font-Radio text-6xl '}>{remainingTime === 0 ? '00' : minuteFormating(remainingTime)}</h2>
  //             <h3 className={'text-neutral-50 font-Radio text-2xl'}>m</h3>
  //           </div>
  //           <h2 className={'text-neutral-50 font-Radio text-6xl'}>:</h2>
  //           <div className={'w-full h-1/2 p-2 flex items-center justify-center gap-x-1'}>
  //             <h2 className={'text-neutral-50 font-Radio text-6xl '}>{remainingTime === 0 ? '00' : secondFormating(remainingTime)}</h2>
  //             <h3 className={'text-neutral-50 font-Radio text-2xl'}>s</h3>
  //           </div>
  //         </article>
  //         {/* <input onChange={(e) => dispatch(setDuration(parseInt(e.target.value)))} type="number" name="" id="" />
  //         <button onClick={() => {dispatch(setTimer(duration))}}>Submit</button> */}
  //       </section>
  //       <TypeController/>
  //     </div>
  //   </>
  // )
};

export default countdownTimer;