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
            <NavLink class="nav__link" to='/categoria/mercedes'>Mercedes</NavLink>
            </li>
            <li>
            <NavLink class="nav__link" to='/categoria/maserati'>Maserati</NavLink>
            </li>
            <li>
            <NavLink class="nav__link" to='/categoria/bmw'>BMW</NavLink>
            </li>
            <li>
            <NavLink class="nav__link" to='/categoria/volvo'>Volvo</NavLink>
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
