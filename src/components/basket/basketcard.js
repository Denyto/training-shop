function BasketCart({ name, image, price, size, callback, callback2, callback3, quantity }) {

  return (
    <>
      <div className="basket__content__card">
        <div className="basket__content__card__icon">
          <img alt="map" src={`https://training.cleverland.by/shop${image}`}></img>
        </div>
        <div className="basket__content__card__info">
          <div className="basket__content__card__name">
            <p>{name}</p>
            <p>{size}</p>
          </div>
          <div className="basket__content__card__price">
            <div className="basket__content__card__plusminus">
              <p onClick={callback3}>-</p>
              <p>{quantity}</p>
              <p onClick={callback2}>+</p>
            </div>
            <p>${(quantity * price).toFixed(2)}</p>
            <div className="basket__content__card__trash" onClick={callback}>
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
