import styled from "./navbar.module.css";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className={styled.navSection}>
      <div className="container">
        <div className={styled.navOption}>
          <ul>
            <li>
              <Link to={"/"}>لیست مقالات </Link>
            </li>

            <li>
              <Link to={"/about"}>درباره ما</Link>
            </li>
            <li>
              <Link to={"/articleP"}>ساخت مقاله</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
