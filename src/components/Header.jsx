import logoImg from "./logo.png";

const Header = () => {
  return (
    <div id="header">
      <div id="logo-container">
        <img src={logoImg} className="logo"></img>
      </div>
      <div id="nav-items">
        <ul id="sidemenu">
          <li>
            <a href="#search" className="search">
              <i className="fa-solid fa-magnifying-glass icons search-icon"></i>
              Search
            </a>
          </li>
          <li>
            <a href="#home" className="home">
              <i className="fa-solid fa-house icons home"></i>Home
            </a>
          </li>
          <li>
            <a href="#offers" className="offers">
              <i className="fa-solid fa-tags icons offers"></i>Offers
            </a>
          </li>
          <li>
            <a href="#login" className="login">
              <i className="fa-solid fa-right-to-bracket icons login"></i>Login
            </a>
          </li>
          <li>
            <a href="#signup" className="signup">
              <i className="fa-solid fa-user-plus icons signup"></i>Signup
            </a>
          </li>
          <li>
            <a href="#yourcart" className="cart">
              <i className="fa-solid fa-cart-shopping icons cart"></i>Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
