function BasketCart({ name, image, price, size, deleteCard, increment, decrement, quantity, color }) {

  return (
    <>
      <div className="basket__content__card" data-test-id="cart-card">
        <div className="basket__content__card__icon">
          <img alt="map" src={`https://training.cleverland.by/shop${image}`}></img>
        </div>
        <div className="basket__content__card__info">
          <div className="basket__content__card__name">
            <p>{name}</p>
            <p>
              {color}, {size}
            </p>
          </div>
          <div className="basket__content__card__price">
            <div className="basket__content__card__plusminus">
              <p onClick={decrement} data-test-id="minus-product">
                -
              </p>
              <p>{quantity}</p>
              <p onClick={increment} data-test-id="plus-product">
                +
              </p>
            </div>
            <p>${(quantity * price).toFixed(2)}</p>
            <div
              className="basket__content__card__trash"
              onClick={deleteCard}
              data-test-id="remove-product"
            >
              <img alt="basket" src={require('../../assets/img/basketcard.png')}></img>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default BasketCart;
