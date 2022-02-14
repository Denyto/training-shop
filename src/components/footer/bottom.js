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
            >
              <img
                src={require(`../../assets/img/facebook.png`)}
                alt="facebook"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="blank"
              className="footer-bottom__social__twitter"
            >
              <img
                src={require(`../../assets/img/twitter.png`)}
                alt="twitter"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="footer-bottom__social__instagram"
            >
              <img
                src={require(`../../assets/img/instagram.png`)}
                alt="instagram"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="blank"
              className="footer-bottom__social__noname"
            >
              <img
                src={require(`../../assets/img/noname.png`)}
                alt="noname"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterBottom;
