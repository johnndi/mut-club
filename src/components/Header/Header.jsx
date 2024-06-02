/* eslint-disable react/no-unescaped-entities */
import "./Header.css";
import { link } from "react-router-dom";
const Header = () => {
  return (
    <section>
      <div className="Header">
        <h1 className="title">murang'a university tech club(mutc)</h1>
        <nav className="HeaderNavList">
          <ul className="NavList-items">
            <li className="navItem">
              <link to="/">home</link>
            </li>
            <li className="navItem">
              <link to="/Track">track</link>
            </li>
            <li className="navItem">
              <link to="/Leadership">leadership</a>
            </li>
            <li className="navItem">
              <link to="/Events">event</link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
