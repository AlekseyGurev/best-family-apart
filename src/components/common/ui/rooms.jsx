import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Rooms = ({ id, img, name, price }) => {
  return (
    <Link className="text-decoration-none" to={`/rooms/${id}`}>
      <div className="col">
        <div className="card">
          <img src={img[0]} className="card-img-top img-thumbnail" alt="..." />
          <div className="card-body">
            <h6 className="card-title link-secondary">{name}</h6>
            <p className="card-text link-dark">{price} рублей</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
Rooms.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};
export default Rooms;
