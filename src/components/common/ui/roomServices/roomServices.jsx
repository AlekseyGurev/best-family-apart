import React from "react";
import PropTypes from "prop-types";

const RoomServices = ({ name }) => {
  return <li>{name}</li>;
};

RoomServices.propTypes = {
  name: PropTypes.string,
};

export default RoomServices;
