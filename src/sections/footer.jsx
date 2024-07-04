import { FacebookIcon } from "../../public/assets/footer/FacebookIcon";
import { InstagramIcon } from "../../public/assets/footer/InstagramIcon";
import { TwitterIcon } from "../../public/assets/footer/TwitterIcon";
import { YouTubeIcon } from "../../public/assets/footer/YouTubeIcon";
import { SendIcon } from "../../public/assets/footer/SendIcon";
import SmoothScrollLink from "../components/SmoothScrollLink";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__info">
          <div className="group">
            <SmoothScrollLink to="home">
              {" "}
              <a className="logo" id="dark-logo" href="#home">
                Tammy <span>Food</span>
              </a>
            </SmoothScrollLink>
            <p className="footer__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
            <div className="footer__socials">
              <a href="/">
                <FacebookIcon />
              </a>{" "}
              <p className="line"></p>
              <a href="/">
                <InstagramIcon />
              </a>{" "}
              <p className="line"></p>
              <a href="/">
                <TwitterIcon />
              </a>{" "}
              <p className="line"></p>
              <a href="/">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          <div className="group">
            <h3 className="footer__title">Quick Link</h3>

            <div className="footer__links">
              <SmoothScrollLink to="about">
                <a href="#about" className="footer__link">
                  About us
                </a>
              </SmoothScrollLink>

              <SmoothScrollLink to="menu">
                {" "}
                <a href="#menu" className="footer__link">
                  Menu
                </a>
              </SmoothScrollLink>

              <SmoothScrollLink to="service">
                <a href="#service" className="footer__link">
                  Service
                </a>
              </SmoothScrollLink>
              <SmoothScrollLink to="contact">
                {" "}
                <a href="#contact" className="footer__link">
                  Contact us
                </a>
              </SmoothScrollLink>
            </div>
          </div>

          <div className="group">
            <h3 className="footer__title">News Letter</h3>
            <p className="footer__desc">
              Subscribe our newsletter to get our latest update & news
            </p>
            <form className="form">
              <input
                className="form-input"
                type="email"
                placeholder="Your email address"
              />
              <button type="submit" className="btn form-btn">
                <SendIcon />
              </button>
            </form>
          </div>
        </div>

        <p className="border-line"></p>
        <p className="copyright">
          &#9426; Copyright 2021 .Tammy Food. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
