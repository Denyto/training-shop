import WomenBody from './womenbody';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../constants/const';

function Women() {
  const [particular, selectParticular] = useState('isNewArrivals');

  function setMenuMode(e) {
    selectParticular(e.target.dataset.particularname);
    document.querySelectorAll('.women__nav li').forEach((el) => el.classList.remove('selected'));
    e.target.classList.add('selected');
  }
  return (
    <section className="women clothes" data-test-id="clothes-women">
      <div className="wrapper women__wrapper">
        <div className="women__header">
          <h2>WOMEN'S</h2>
          <ul className="women__nav" onClick={setMenuMode}>
            {MAIN_CLOTHES_BLOCK_MENU.map((elem, index) => (
              <li
                className={index === 0 ? 'selected' : ''}
                key={elem.particularName}
                data-particularname={elem.particularName}
                data-test-id={`clothes-women-${elem.particularName}`}
              >
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
        <WomenBody particular={particular}></WomenBody>
        <Link to="/women">
          <div className="women__footer">
            <p>SEE ALL</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Women;
