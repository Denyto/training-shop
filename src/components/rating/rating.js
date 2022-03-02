function Rating({ rating }) {
  let yellowStar = [];
  let whiteStar = [];
  for (let i = 0; i < rating; i++) {
    yellowStar.push({});
  }
  for (let i = 0; i < 5 - rating; i++) {
    whiteStar.push({});
  }

  return (
    <>
      {yellowStar.map((elem, index) => (
        <div key={index} className="product__review__star">
          <img
            alt="review"
            src={require('../../assets/img/yellowStar.png')}
          ></img>
        </div>
      ))}
      {whiteStar.map((elem, index) => (
        <div key={index} className="product__review__star">
          <img
            alt="review"
            src={require('../../assets/img/whiteStar.png')}
          ></img>
        </div>
      ))}
    </>
  );
}

export default Rating;
