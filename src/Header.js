import React from "react";

const Header = () => {
  return (
    <header classNameName="header m-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
          <img style={{ width: '50px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2eYRbcnDYfSHqf6Xy4jjAe1iXEl1zF0aCA&s" alt="Logo" />

          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <div className="nav-link">Trang chủ</div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-outline-success" type="submit">Đặt lịch khám</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;