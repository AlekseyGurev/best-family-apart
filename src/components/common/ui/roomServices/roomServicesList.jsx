import React from "react";
import RoomServices from "../roomServices/roomServices";
import PropTypes from "prop-types";

const RoomServicesList = ({ services }) => {
  return (
    <>
      <ul>
        {services.map((service) => (
          <RoomServices key={service._id} name={service.name} />
        ))}
      </ul>
    </>
  );
};

RoomServicesList.propTypes = {
  services: PropTypes.array,
};

export default RoomServicesList;
