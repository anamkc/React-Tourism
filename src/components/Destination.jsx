import React, { useState } from "react";
import Destinationlist from "./Destinationlist";

const Destination = ({ data, removeTour }) => {
  return (
    <div className="destination">
      {data.map((list) => (
        <Destinationlist Holiday={list}  removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Destination;
