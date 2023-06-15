import React, { useState } from "react";
// import logo  from "./public/logo.png";

import { 
    FaBars,
    // GrGroup,
    // GrPlan,
    // BsCodeSlash,
    // FaAccessibleIcon,
    FaUserAlt,
    FaCode,
    FaCalendarCheck,
    FaUserFriends,
    
}from "react-icons/fa"
import { FcTodoList } from "react-icons/fc"

import { NavLink } from "react-router-dom";
const Sidebar = ({children}) => {  
    const[isOpen ,setIsOpen]=useState(false);
    const toggle =()=> setIsOpen(!isOpen);
    const close =()=> setIsOpen(false);
    const open =()=> setIsOpen(true);
    const menuItem =
        [
            {
                path: "/",
                name:"Users",
                icon:<FaUserAlt/>,
            },
            {
                path: "/Groupes",
                name:"Groupes",
                icon:<FaUserFriends />,
            },
            {
                path: "/Planings",
                name:"Planings",
                icon:<FaCalendarCheck/> 
            },
            {
                path: "/Codes",
                name:"Codes",
                icon:<FaCode/>
            },            {
                path: "/Todos",
                name:"Todo",
                icon:<FcTodoList/>
            }
    ]
    return (
    <div className="container">
        <div style={{width:isOpen ? "200px" :"50px"}}className="sidebar">
            <div className="top_section">
                {/* <img src={{logo}}  alt="Logo"/> */}
                <div style={{marginLeft:isOpen ? "100px" :"0px"}} className="bars">
                    <FaBars onClick={toggle} /> 

                </div>
            </div>
            {
                menuItem.map((item,index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active" onClick={open}>
                        <div className="icon">{item.icon}</div>
                        <div style={{display:isOpen ? "block" :"none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main onClick={close} >{children}</main>
    </div>
    );
};

export default Sidebar;