import { useState, useEffect } from 'react';
import BasketCart from './basketcard';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct, incrementQuantity, decrementQuantity } from '../redux/actions';
import { useSelector } from 'react-redux';

function Basket({ isVisible, callback, cards }) {
  const [total, setTotal] = useState('0');

  let sum = 0;
  useSelector((state) => {
    // console.log(state);
    state.products.products.forEach((el, index) => index >= 0 && (sum += el.quantity * el.price));
  });

  useEffect(() => setTotal(sum.toFixed(2)), [sum]);

  const dispatch = useDispatch();
  // console.log(cards);

  return (
    <div className={classNames('basket', { visible: isVisible })} data-test-id="cart">
      <div className="basket__overlay" onClick={callback}></div>
      <div className="basket__content">
        <div className="basket__content__header">
          <div className="basket__content__title">
            <p>SHOPPING CART</p>
            <div onClick={callback}>
              <img alt="close" src={require('../../assets/img/shopx.png')}></img>
            </div>
          </div>
          <div className="basket__content__option">
            <p>Item in Cart</p>/<p>Delivery Info</p>/<p>Payment</p>
          </div>
        </div>
        <div className="basket__content__main">
          {cards.length > 0 ? (
            cards.map((el) => (
              <BasketCart
                color={el.color}
                name={el.name}
                key={Math.random()}
                image={el.image.url}
                price={el.price}
                size={el.sizes}
                quantity={el.quantity}
                deleteCard={() => dispatch(deleteProduct(el))}
                increment={() => dispatch(incrementQuantity(el))}
                decrement={() => dispatch(decrementQuantity(el))}
              ></BasketCart>
            ))
          ) : (
            <div className="basket__empty">
              <div className="basket__empty__text">Sorry, your cart is empty</div>
              <div
                className="basket__content__further"
                onClick={callback}
                style={{ marginBottom: '2.4rem' }}
              >
                BACK TO SHOPPING
              </div>
            </div>
          )}
        </div>
        {cards.length > 0 && (
          <div className="basket__content__bottom">
            <div className="basket__content__total">
              <p>Total</p>
              <p>${total}</p>
            </div>
            <div className="basket__content__further">FURTHER</div>
            <div className="basket__content__viewcart" onClick={callback}>
              VIEW CART
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.products.products,
  };
};

export default connect(mapStateToProps, null)(Basket);
