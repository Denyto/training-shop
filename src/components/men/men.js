import MenBody from './menbody';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../constants/const';

function Men() {
  const [particular, selectParticular] = useState('isNewArrivals');

  function setMenuMode(e) {
    selectParticular(e.target.dataset.particularname);
    document.querySelectorAll('.men__nav li').forEach((el) => el.classList.remove('selected'));
    e.target.classList.add('selected');
  }

  return (
    <section className="men clothes" data-test-id="clothes-men">
      <div className="wrapper men__wrapper">
        <div className="men__header">
          <h2>MEN'S</h2>
          <ul className="men__nav" onClick={setMenuMode}>
            {MAIN_CLOTHES_BLOCK_MENU.map((elem, index) => (
              <li
                className={index === 0 ? 'selected' : ''}
                key={elem.particularName}
                data-particularname={elem.particularName}
                data-test-id={`clothes-men-${elem.particularName}`}
              >
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
        <MenBody particular={particular}></MenBody>
        <Link to="/men">
          <div className="men__footer">
            <p>SEE ALL</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Men;
