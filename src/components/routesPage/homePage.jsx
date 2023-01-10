import React from 'react';
import CountdownTimer from '../countdownTimer/countdownTimer';
import EventHandler from '../eventHandler/eventHandler';
import Modal from '../Modal/typeModal';
// import CountdownTimer from '../countdownTimer/countdownTimer'

const homePage = () => {
    return (
        <>
            <main className='relative w-screen h-screen'>
                <Modal/>
                <article className='w-full h-full flex flex-col gap-y-10 items-center justify-center bg-primary-bg'>
                    <CountdownTimer/>
                    <EventHandler/>
                </article>
            </main>
        </>
    )
};

export default homePage;
