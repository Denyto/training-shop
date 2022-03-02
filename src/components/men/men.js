import MenBody from './menbody';
import { useState } from 'react';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../constants/const';

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
            {MAIN_CLOTHES_BLOCK_MENU.map((elem) => (
              <li
                key={elem.particularName}
                onClick={setMenuMode}
                data-particularname={elem.particularName}
              >
                {elem.name}
              </li>
            ))}
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
