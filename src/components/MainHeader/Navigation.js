import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/AuthContext";

const Navigation = () => {
  const context = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">사용자</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">어드민</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>로그아웃</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
