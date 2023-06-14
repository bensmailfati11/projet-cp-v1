import React from 'react';
import './App.css';
// import { BrowserRouter,Route,Routes} from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer';
// import Users from './pages/Users/Users.jsx';
// import Groupes from './pages/Groupes/Groupes.jsx';
// import Planings from './pages/Planings/Planings.jsx';
// import Codes from './pages/Codes/Codes.jsx';
// import Todo from './pages/Todos/Todo.jsx';


import Navbars from './ComponentsA/Navbars';
import About from './PagesA/About/About';
import Contact from './PagesA/Contact/Contact';
import Home from './PagesA/Home/Home';
import Registre from './PagesA/Home/Registre';


const App=()=> {

  return (
    <div className="AppHome" > 
      {/* <Navbar className="Navbar"/>
      <div>
    <BrowserRouter>
    <Sidebar>
      <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Groupes" element={<Groupes />} />
      <Route path="/Planings" element={<Planings />} />
      <Route path="/Codes" element={<Codes />} />
      <Route path="/Todos" element={<Todo />} />
      </Routes>
      </Sidebar>
      </BrowserRouter>
      </div>
      <Footer/> */}
      <div className="AppHome">
      <div className="App">
      <Navbars />
      <Home/>
      <About />
      <Contact/>
      <Registre />
      </div>
    </div>
      </div>

    
  );
}

export default App;
