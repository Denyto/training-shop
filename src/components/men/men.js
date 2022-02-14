import MenBody from "./menbody";

function Men() {
  return (
    <section className="men">
      <div className="wrapper men__wrapper">
        <div className="men__header">
          <h2>MEN'S</h2>
          <ul className="men__nav">
            <li>NEW ARRIVALS</li>
            <li>SPECIALS</li>
            <li>BESTSELLERS</li>
            <li>MOST VIEWED</li>
            <li>FEATURED PRODUCTS</li>
          </ul>
        </div>
        <MenBody></MenBody>
        <div className="men__footer">
          <p>SEE ALL</p>
        </div>
      </div>
    </section>
  );
}

export default Men;
