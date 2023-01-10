import React from 'react';
// import Navigation from './components/navigation/navigation';
// import EventHandler from './components/eventHandler/eventHandler';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/routesPage/homePage';

function App() {
  return (
    <>
      {/* <Navigation/>
      <EventHandler/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/podomoro' element={<HomePage/>}/>
        <Route path='/stopwatch' element={<HomePage/>}/>
      </Routes>
    </>
  )
  
}

export default App
