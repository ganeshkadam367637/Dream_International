import React from "react";
import './index.css'
import { NavLink } from "react-router-dom";

export default function  Header() {
    return(
        <>

            <div className="container-fluid sticky-top ">
                        <div className="row ">
                            <div className="col-md-12  p-0" >
                            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand  bg-warning">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-4" href="/">Header</a>
                            
                            <div className="  d-flex justify-content-end " >
                            <ul className="navbar-nav    "> 
                                
                                <li className="nav-item">
                                <NavLink className="nav-link fs-5 " to="/comp1">Component1</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link fs-5 " to="/comp2">Component2</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link fs-5 " to="/comp3">Component3</NavLink>
                                </li>
                               
                            </ul>
                            </div>
                        </div>
            </nav>
                            </div>
                        </div>
            </div>
        
        </>
    )
}