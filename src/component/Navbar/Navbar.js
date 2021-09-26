import "./Navbar.css";
import { NavLink } from "react-router-dom";
import search from "../../assets/icons/search.png";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid topbar_container">
        <div className="topbar">
          <div className="img">
            <img src={search} />
          </div>
          <p>Contact Us</p>
          <p>Login</p>
        </div>
      </div>
      <div className="container-fluid nav_bg">
        <div className="col-12 mx-auto ">
          <nav className="container navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="#">
                <img src={logo} width="150px" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Solutions
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Resources
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Case Study
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
                <div className="nav_input ">
                  <input type="email" placeholder="Email address" />
                  <button>Let’s Talk</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
