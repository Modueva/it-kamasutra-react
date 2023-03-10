import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
 import { BrowserRouter, Route, Routes } from "react-router-dom";



function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>    
        <Navbar/>
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
