import React from "react";
import './Style.css'
import CartWidget from "../CartWidget/Index";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
   
      <nav className="navbar">
        

  <NavLink className="nav__link" to='/'>MacMarquez</NavLink>

        <ul className="nav__list">
          <li>
            <NavLink className="nav__link" to='/categoria/Mercedes Benz'>Mercedes Benz</NavLink>
            </li>
            <li>
            <NavLink className="nav__link" to='/categoria/Maserati'>Maserati</NavLink>
            </li>
            <li>
            <NavLink className="nav__link" to='/categoria/BMW'>BMW</NavLink>
            </li>
            <li>
            <NavLink className="nav__link" to='/categoria/Volvo'>Volvo</NavLink>
            </li>
           <li>
            <NavLink className="nav__link" to="cart">
              <CartWidget />
            </NavLink>
           </li>
        </ul>
      </nav>

  );
};

export default NavBar;
