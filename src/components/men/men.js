import MenBody from './menbody';
import { useState } from 'react';

function Men() {
  const [particular, selectParticular] = useState('isNewArrivals');

  function setMenuMode(e) {
    selectParticular(e.target.dataset.particularname);
  }

  return (
    <section className="men clothes" data-test-id="clothes-men">
      <div className="wrapper men__wrapper">
        <div className="men__header">
          <h2>MEN'S</h2>
          <ul className="men__nav">
            <li onClick={setMenuMode} data-particularname="isNewArrivals">
              NEW ARRIVALS
            </li>
            <li onClick={setMenuMode} data-particularname="isSpecial">
              SPECIALS
            </li>
            <li onClick={setMenuMode} data-particularname="isBestseller">
              BESTSELLERS
            </li>
            <li onClick={setMenuMode} data-particularname="isMostViewed">
              MOST VIEWED
            </li>
            <li onClick={setMenuMode} data-particularname="isFeatured">
              FEATURED PRODUCTS
            </li>
          </ul>
        </div>
        <MenBody data={particular}></MenBody>
        <div className="men__footer">
          <p>SEE ALL</p>
        </div>
      </div>
    </section>
  );
}

export default Men;
