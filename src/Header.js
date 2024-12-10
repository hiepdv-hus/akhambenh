import React from "react";
import Logo from "./images/logo-BK.png"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header classNameName="header m-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
          <img className="logo-img" style={{ width: '50px' }} src={Logo} alt="Logo" />

          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link to="/"><div className="nav-link">Trang chủ</div></Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link to="/cuoc-hen">
                <button className="btn btn-outline-dark">Thống kê lịch hẹn</button>
              </Link>
              <Link to="/dat-lich-kham">
                <button className="btn btn-outline-success ms-3" type="submit">Đặt lịch khám</button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
