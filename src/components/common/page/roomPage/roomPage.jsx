import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../API";

const RoomPage = ({ roomId }) => {
  const [room, setRooms] = useState();
  const params = useParams();
  const { edit } = params;
  useEffect(() => {
    api.rooms.getById(roomId).then((roomData) => {
      setRooms(roomData);
    });
  }, []);
  return (
    <>
      {room ? (
        <>
          {edit === "edit" ? (
            <h1>"Edit"</h1>
          ) : (
            <div className="container">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={room.img}
                      className="img-fluid rounded-start  p-4"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{room.name}</h5>
                      <p className="card-text">{room.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="container">
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
};

export default RoomPage;
