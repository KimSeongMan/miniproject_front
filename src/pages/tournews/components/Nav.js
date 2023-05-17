import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav id="nav">
        <ul className="list">
          <li>
            <NavLink
              to="/tournews/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="btn-det">&#35; 봄꽃 가득</div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tournews/kcul"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="btn-det">&#35; K-문화</div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tournews/mu"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="btn-det">&#35; 음악 여행</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
