import { Link } from "react-router-dom";

function FooterTop() {
    return (
      <div className="footer-top">
        <div className="wrapper footer-top__wrapper">
          <div className="footer-top__left">
            <i className="footer-top__phone"></i>
            <div className="footer-top__item">+375297726366</div>
            <i className="footer-top__map"></i>
            <div className="footer-top__item footer-top__item__location">
              Belarus, Gomel, Lange 17
            </div>
            <i className="footer-top__clock"></i>
            <div className="footer-top__item">All week 24/7</div>
          </div>
  
          <ul className="footer-top__social">
            <li>
              <Link
                to="https://www.facebook.com"
                className="footer-top__social__facebook"
                target="blank"
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.twitter.com"
                target="blank"
                className="footer-top__social__twitter"
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                target="blank"
                className="footer-top__social__instagram"
              ></Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com"
                target="blank"
                className="footer-top__social__noname"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default FooterTop;