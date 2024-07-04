import SmoothScrollLink from "../components/SmoothScrollLink";

function Header() {
  const navToggle = () => {
    document.getElementById("headerUl").classList.toggle("_active");
    document.getElementById("headerBackdrop").classList.toggle("_active");
  };
  return (
    <header className="header" id="home">
      <div className="container header__container">
        <a className="logo" href="/">
          Tammy <span>Food</span>
        </a>
        <div className="header__nav">
          <div
            className="header__backdrop"
            id="headerBackdrop"
            onClick="navToggle()"
          ></div>
          <ul className="header__ul" id="headerUl">
            <li className="header__li">
              <SmoothScrollLink to="home">
                <a className="header__a is-active" href="#home">
                  Home
                </a>
              </SmoothScrollLink>
            </li>
            <li className="header__li">
              <SmoothScrollLink to="about">
                <a className="header__a" href="#about">
                  About us
                </a>
              </SmoothScrollLink>
            </li>
            <li className="header__li">
              <SmoothScrollLink to="menu">
                <a className="header__a" href="#menu">
                  Menu
                </a>
              </SmoothScrollLink>
            </li>
            <li className="header__li">
              <SmoothScrollLink to="service">
                <a className="header__a" href="#service">
                  Service
                </a>
              </SmoothScrollLink>
            </li>
            <li className="header__li">
              <SmoothScrollLink to="contact">
                <a className="header__a" href="#contact">
                  Contact us
                </a>
              </SmoothScrollLink>
            </li>

            <span className="material-icons icon-close" onClick={navToggle}>
              close
            </span>
          </ul>
          <span className="material-icons icon-menu" onClick={navToggle}>
            menu
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
