import WomenBody from './womenbody';
import { useState } from 'react';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../constants/const';

function Women() {
  const [particular, selectParticular] = useState('isNewArrivals');

  function setMenuMode(e) {
    selectParticular(e.target.dataset.particularname);
  }
  return (
    <section className="women clothes" data-test-id="clothes-women">
      <div className="wrapper women__wrapper">
        <div className="women__header">
          <h2>WOMEN'S</h2>
          <ul className="women__nav">
            {MAIN_CLOTHES_BLOCK_MENU.map((elem) => (
              <li
                key={elem.particularName}
                onClick={setMenuMode}
                data-particularname={elem.particularName}
                data-test-id={`clothes-women-${elem.particularName}`}
              >
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
        <WomenBody particular={particular}></WomenBody>
        <div className="women__footer">
          <p>SEE ALL</p>
        </div>
      </div>
    </section>
  );
}

export default Women;
