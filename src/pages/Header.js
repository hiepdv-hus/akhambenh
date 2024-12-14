import React from "react";
import Logo from "../images/logo-xanh-text.png"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header m-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand col-lg-3">
            <img className="logo-img" style={{ width: '88px' }} src={Logo} alt="Logo" />

          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                
                <li class="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dienstleistungen
                    </div>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><div className="dropdown-item" href="#">Action</div></li>
                        <li><div className="dropdown-item" href="#">Another action</div></li>
                        <li><div className="dropdown-item" href="#">Something else here</div></li>
                    </ul>
                </li>
              <li className="nav-item active">
                <Link to="/"><div className="nav-link">Gutscheine</div></Link>
              </li>
              <li className="nav-item active">
                <Link to="/"><div className="nav-link">Kontakt</div></Link>
              </li>
              <li className="nav-item active">
                <Link to="/"><div className="nav-link">FAQ</div></Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link to="/cuoc-hen">
                <button className="btn-termin">TERMIN</button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;
