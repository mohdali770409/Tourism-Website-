import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  // const description = `${info.substring(0, 200)}...`;

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} alt="id" className="image"></img>
      <div className="tour-details">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">{description}</div>
        <span className="read-more" onClick={readmoreHandler}>
          {readmore ? `show less` : `read more`}
        </span>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}
export default Card;
