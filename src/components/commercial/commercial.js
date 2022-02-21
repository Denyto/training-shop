import { Link } from "react-router-dom";
import Advantage from "./advantage";
import SliderMain from "../slider/sliderMain";

function Commercial() {
  return (
    <aside className="commercial">
      <div className="wrapper commercial__wrapper">
        <div className="commercial__half">
          <SliderMain
            type={["banner.png", "banner.png", "banner.png"]}
          ></SliderMain>
          <div className="commercial__half__arrow commercial__half__arrow__right btn-next"></div>
          <div className="commercial__half__arrow commercial__half__arrow__left btn-prev"></div>
          <div className="commercial__half__banner">
            <p>BANNER</p>
            <h2>YOUR TITLE TEXT</h2>
          </div>       
        </div>
        <div className="commercial__half">
          <div className="commercial__quarter">
            <div className="commercial__part">
              <div className="commercial__part__banner">
                <h3>
                  <Link to="/women">WOMEN</Link>
                </h3>
              </div>
            </div>
            <div className="commercial__part">
              <div className="commercial__part__banner">
                <h3>
                  <Link to="/men">MEN</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="commercial__quarter">
            <div className="commercial__quarter__banner">
              <h3>ACCESSORIES</h3>
            </div>
          </div>
        </div>
      </div>
      <Advantage></Advantage>
    </aside>
  );
}

export default Commercial;
