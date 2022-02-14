function FooterBottom() {
    return (
      <div className="footer-bottom">
        <div className="wrapper footer-bottom__wrapper">
          <div className="footer-bottom__left">
            <i className="footer-bottom__phone"></i>
            <div className="footer-bottom__item">+375297726366</div>
            <i className="footer-bottom__map"></i>
            <div className="footer-bottom__item footer-bottom__item__location">
              Belarus, Gomel, Lange 17
            </div>
            <i className="footer-bottom__clock"></i>
            <div className="footer-bottom__item">All week 24/7</div>
          </div>
  
          <ul className="footer-bottom__social">
            <li>
              <a
                href="https://www.facebook.com"
                className="footer-bottom__social__facebook"
                target="blank"
              ></a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="blank"
                className="footer-bottom__social__twitter"
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="footer-bottom__social__instagram"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="blank"
                className="footer-bottom__social__noname"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default FooterBottom;