import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.component.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-head">
        <div className="d-flex container">
          <div className="text-center col-12 col-lg-6 d-xl-flex align-items-center">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/images/SamekLogo.png"}
              alt="IMAGES"
            />
            <p className="acme text-lg">Bhimeshwor Bahhuudeshay Krishi Firm</p>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <nav className="nav float-right">
              <ul className="d-flex align-items-center ">
                <li>
                  <NavLink to="/">
                    <i class="fa fa-home" aria-hidden="true"></i> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <i class="fa fa-id-card" aria-hidden="true"></i> About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">
                    <i class="fa fa-camera" aria-hidden="true"></i> Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-form">
                    <i class="fa fa-phone" aria-hidden="true"></i> Order
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="d-block d-lg-none">
            <nav className="nav res-nav">
              <ul className="d-flex align-items-end res-ul">
                <li>
                  <NavLink to="/">
                    {/* <i
                      id="home"
                      class="fas fa-home 7x text-danger"
                      aria-hidden="true"
                    ></i> */}
                    <i class="fas fa-home text-danger" id="home"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <i
                      id="about"
                      class="fas 3x fa-id-card text-danger"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">
                    <i
                      id="gallery"
                      class="fa fa-image 3x text-danger"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order-form">
                    <i
                      id="contact"
                      class="fa fa-phone text-danger"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
