import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper topbar__wrapper">
        <div className="topbar__left">
          <div className="topbar__item">
            <div>
              <img
                alt="phone"
                src={require("../../assets/img/phone.png")}
              ></img>
            </div>
            <p>+375 29 100 20 30</p>
          </div>
          <div className="topbar__item">
            <div>
              <img alt="map" src={require("../../assets/img/map.png")}></img>
            </div>
            <p> Belarus, Gomel, Lange 17</p>
          </div>
          <div className="topbar__item">
            <div>
              <img
                alt="clock"
                src={require("../../assets/img/clock.png")}
              ></img>
            </div>
            <p>All week 24/7</p>
          </div>
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
