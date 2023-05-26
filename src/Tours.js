import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, eraseTour }) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h1>Your TOUR to trip</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} eraseTour={eraseTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
