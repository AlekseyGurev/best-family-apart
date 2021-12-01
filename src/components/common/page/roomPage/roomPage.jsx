import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../../../API";
import RoomServicesList from "../../ui/roomServices/roomServicesList";
import PropTypes from "prop-types";
import RoomEditForm from "../../ui/roomEditForm";
import ImageSlider from "../../ui/imageSlaider";

const RoomPage = ({ roomId }) => {
  const [room, setRooms] = useState();
  const history = useHistory();
  const params = useParams();
  const { edit } = params;
  useEffect(() => {
    api.rooms.getById(roomId).then((roomData) => {
      setRooms(roomData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);
  const goToEdit = () => {
    history.push(`/rooms/${roomId}/edit`);
  };
  return (
    <>
      {room ? (
        <>
          {edit === "edit" ? (
            <RoomEditForm roomId={roomId} />
          ) : (
            <div className="container">
              <div className="card mb-3">
                <button
                  className="position-absolute top-0 end-0 btn btn-light btn-sm"
                  onClick={goToEdit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-gear-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </button>
                <div className="row g-0">
                  <div className="col-md-6 p-4">
                    <ImageSlider img={room.img} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{room.name}</h5>
                      <p className="card-text">
                        стоимость за ночь {room.price} рублей
                      </p>
                      <p className="card-text">{room.text}</p>
                      <RoomServicesList services={room.services} />
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

RoomPage.propTypes = {
  roomId: PropTypes.string,
};

export default RoomPage;
