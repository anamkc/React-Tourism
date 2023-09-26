import React, { useState } from "react";

export const Destinationlist = ({ Holiday, removeTour }) => {
  const { id, name, info, image, price } = Holiday;
  const [text, setText] = useState(info.substring(0, 200));
  const [more, setMore] = useState(false);

  const readMore = () => {
    setText(info);
    setMore(true)
  };

  const readLess = () => {
    setText(info.substring(0, 200));
    setMore(false)
  };

  return (
    <div className="destinationlist">
      <img src={image} alt="" />
      <span className="price">$ {price}</span>
      <div className="tour-details">
        <h1>{name}</h1>
        <div className="details">
          <p>
            {text}
            {more ? (
              <button className="detail-btn" onClick={readLess}>
                Readless..
              </button>
            ) : (
              <button className="detail-btn" onClick={readMore}>
                Readmore..
              </button>
            )}
          </p>
        </div>
        <div className="btn">
          <button className="not-intrested" onClick={() => removeTour(id)}>
            {" "}
            Not intrested
          </button>
        </div>
      </div>
    </div>
  );
};
export default Destinationlist;
