import React from "react";
import {Link} from "react-router-dom";
import s from "../style.module.css"

const Nav = () => {
  return(
      <nav>
          <ul className={s.links}>
              <li>
              <Link to="/">
                  Home
              </Link>
              </li>
              <li>
              <Link to="/clock">
                  clock
              </Link>
              </li>
          </ul>
      </nav>
  )
}

export default Nav