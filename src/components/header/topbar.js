function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper topbar__wrapper">
        <div className="topbar__left">
          <i className="topbar__phone"></i>
          <div className="topbar__item">+375 29 100 20 30</div>
          <i className="topbar__map"></i>
          <div className="topbar__item topbar__item__location">
            Belarus, Gomel, Lange 17
          </div>
          <i className="topbar__clock"></i>
          <div className="topbar__item">All week 24/7</div>
        </div>

        <ul className="topbar__social">
          <li>
            <a
              href="https://www.facebook.com"
              className="topbar__social__facebook"
              target="blank"
            ></a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="blank"
              className="topbar__social__twitter"
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="topbar__social__instagram"
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="blank"
              className="topbar__social__noname"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
