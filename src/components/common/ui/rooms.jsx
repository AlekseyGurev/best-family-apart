import React from "react";
import PropTypes from "prop-types";

const Rooms = ({ img, name }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          {/* <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p> */}
        </div>
      </div>
    </div>
  );
};
Rooms.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
export default Rooms;
