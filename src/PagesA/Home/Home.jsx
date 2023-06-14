import React from "react";
import  './Home.css';
import Login from './Login';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Registre from './Registre'


function Home ()  {
  return (
    <div id="Home" style={{}}
    className="Home"  >
      <div className="readme">
        <div className="icon">
        <img 
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=The+five+boxing+wizards+jump+quickly" alt="Typing SVG" />
        </div>
      </div>
      <div className="LoginApp" >
        {/* <BrowserRouter>
        <Route path="/Login" exact component={Login} />
        <Route path="Registre" component={Registre} />
        </BrowserRouter> */}
          <Login className="lop"  />
          </div>
        </div>
  );
};

export default Home;
