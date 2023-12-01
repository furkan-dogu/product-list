import "./ProductCard.scss"

const ProductCard = ({ veri }) => {
  console.log(veri);
  return (
    <div className="cards">
      {veri.map(({ id, price, title, image }) => (
        <div className="card" key={id}>
          <div className="image">
            <img src={image} alt="" />
            <div>
              <div className="price">
                <span>{price}$</span>
              </div>
              <div className="title">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;