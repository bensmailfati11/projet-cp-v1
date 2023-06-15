import React from 'react';
import './App.css';
import Navbars from './ComponentsA/Navbars';
import About from './PagesA/About/About';
import Contact from './PagesA/Contact/Contact';
import Home from './PagesA/Home/Home';
import Registre from './PagesA/Home/Registre';

function front (){
    return(
        <div className="AppHome">
        <div className="App">
        <Navbars />
        <Home/>
        <About />
        <Contact/>
        <Registre />
        </div>
        </div>
    )
}
export default front;