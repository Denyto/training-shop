import WomenBody from './womenbody';
import { useState } from 'react';

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
        <WomenBody data={particular}></WomenBody>
        <div className="women__footer">
          <p>SEE ALL</p>
        </div>
      </div>
    </section>
  );
}

export default Women;
