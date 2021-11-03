import React, { useState, useEffect } from "react";
import api from "../../../../API";
import Rooms from "../../ui/rooms";

const RoomsListPage = () => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    api.rooms.fetchAll().then((roomsData) => {
      setRooms(roomsData);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Доступные номера</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {rooms ? (
          rooms.map((room) => (
            <Rooms key={room._id} img={room.img} name={room.name} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default RoomsListPage;
