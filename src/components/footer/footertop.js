import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="wrapper footer-top__wrapper">
        <div className="footer-top__left">
          <p>BE IN TOUCH WITH US:</p>
        </div>
        <form>
          <input type="text" placeholder="Enter your email"></input>
          <button><p>JOIN US</p></button>
        </form>
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
