import WomenBody from "./womenbody";

function Women() {
  return (
    <section className="women clothes" data-test-id="clothes-women">
      <div className="wrapper women__wrapper">
        <div className="women__header">
          <h2>WOMEN'S</h2>
          <ul className="women__nav">
            <li>NEW ARRIVALS</li>
            <li>SPECIALS</li>
            <li>BESTSELLERS</li>
            <li>MOST VIEWED</li>
            <li>FEATURED PRODUCTS</li>
          </ul>
        </div>
        <WomenBody></WomenBody>
        <div className="women__footer">
          <p>SEE ALL</p>
        </div>
      </div>
    </section>
  );
}

export default Women;
