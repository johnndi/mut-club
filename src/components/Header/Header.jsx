/* eslint-disable react/no-unescaped-entities */
import "./Header.css";
const Header = () => {
  return (
    <section>
      <div className="Header">
        <h1 className="title">murang'a university tech club(mutc)</h1>
        <nav className="HeaderNavList">
          <ul className="NavList-items">
            <li className="navItem">
              <a href="/">home</a>
            </li>
            <li className="navItem">
              <a href="./Track.jsx">track</a>
            </li>
            <li className="navItem">
              <a href="./Leadership.jsx">leadership</a>
            </li>
            <li className="navItem">
              <a href="./Events.jsx">event</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
