import { Link } from "react-router-dom";

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
            <Link
              to="https://www.facebook.com"
              className="topbar__social__facebook"
              target="blank"
            ></Link>
          </li>
          <li>
            <Link
              to="https://www.twitter.com"
              target="blank"
              className="topbar__social__twitter"
            ></Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/"
              target="blank"
              className="topbar__social__instagram"
            ></Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com"
              target="blank"
              className="topbar__social__noname"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
