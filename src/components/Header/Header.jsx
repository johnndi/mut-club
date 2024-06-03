/* eslint-disable react/no-unescaped-entities */
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <section>
      <div className="Header">
        <h1 className="title">murang'a university tech club(mutc)</h1>
        <nav className="HeaderNavList">
          <ul className="NavList-items">
            <li className="navItem">
              <Link to="/">home</Link>
              </li>
            <li className="navItem">
              <Link to="/Track">track</Link>
            </li>
            <li className="navItem">
              <Link to="/Leadership">leadership</Link>
            </li>
            <li className="navItem">
              <Link to="/Events">event</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
