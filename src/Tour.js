import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, eraseTour }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <span className="tour-price">N{price}</span>
        </div>
        <p>
          {viewMore ? info : `${info.substring(0, 220)}...`}
          <button onClick={() => setViewMore(!viewMore)}>
            {viewMore ? "View more" : "View less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => eraseTour(id)}>
          Not interested? Delete
        </button>
      </footer>
    </article>
  );
};

export default Tour;
