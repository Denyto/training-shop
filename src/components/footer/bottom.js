import { Link } from "react-router-dom";

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="wrapper footer-bottom__wrapper">
        <p>Copyright © 2032 all rights reserved</p>
        <div className="footer-bottom__payments">
          <div><img
                alt="Stripe"
                src={require('../../assets/img/Stripe.png')}
              ></img></div>
          <div><img
                alt="aes"
                src={require('../../assets/img/aes.png')}
              ></img></div>
          <div><img
                alt="paypal"
                src={require('../../assets/img/paypal.png')}
              ></img></div>
          <div><img
                alt="visa"
                src={require('../../assets/img/visa.png')}
              ></img></div>
          <div><img
                alt="mastercard"
                src={require('../../assets/img/mastercard.png')}
              ></img></div>
          <div><img
                alt="discover"
                src={require('../../assets/img/discover.png')}
              ></img></div>
          <div><img
                alt="american-express"
                src={require('../../assets/img/american-express.png')}
              ></img></div>
        </div>
        <Link to="#">Clevertec.ru/training</Link>
      </div>
    </div>
  );
}

export default FooterBottom;
