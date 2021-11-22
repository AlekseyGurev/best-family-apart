import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../API";
import PropTypes from "prop-types";
import TextField from "../form/textField";
import MultiSelectField from "../form/multiSelectField";
import TextArea from "../form/textArea";

const RoomEditForm = ({ roomId }) => {
  const [room, setRoom] = useState({
    name: "",
    text: "",
    price: "",
    services: [],
  });
  const history = useHistory();
  // const [errors, setErrors] = useState({});
  const [servicesAll, setServicesAll] = useState({});
  useEffect(() => {
    api.rooms.getById(roomId).then((roomData) => {
      setRoom({
        name: roomData.name,
        text: roomData.text,
        price: roomData.price,
        services: roomData.services.map((service) => ({
          label: service.name,
          value: service._id,
        })),
      });
    });
    api.services.fetchAll().then((services) => {
      setServicesAll(services);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (target) => {
    setRoom((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const servicesEdit = () => {
    const newArrayServices = [];
    room.services.forEach((service) => {
      Object.keys(servicesAll).forEach((serviceAll) => {
        if (servicesAll[serviceAll]._id === service.value) {
          newArrayServices.push(servicesAll[serviceAll]);
        }
      });
    });
    return newArrayServices;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValidate = validate();
    // if (!isValidate) return;
    const data = {
      name: room.name,
      text: room.text,
      services: servicesEdit(),
      price: room.price,
    };
    api.rooms.update(roomId, data);
    history.push(`/rooms/${roomId}`);
    console.log(data);
  };
  return (
    <>
      {Object.keys(servicesAll).length > 0 ? (
        <div className="d-flex flex-row offset-md-2">
          <div>
            <button
              onClick={history.goBack}
              type="button"
              className="btn btn-success m-4"
            >
              Назад
            </button>
          </div>
          <div className="col-md-6 shadow p-4">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Название номера"
                  name="name"
                  value={room.name}
                  onChange={handleChange}
                  // error={errors.email}
                />
                <TextField
                  label="Цена"
                  name="price"
                  value={room.price}
                  onChange={handleChange}
                  // error={errors.email}
                />
                <TextArea
                  label="Описание номера"
                  name="text"
                  rows={"5"}
                  onChange={handleChange}
                  value={room.text}
                />

                <MultiSelectField
                  options={servicesAll}
                  defaultOption="Choose..."
                  name="services"
                  label="Выберете услуги"
                  value={room.services}
                  onChange={handleChange}
                />
                <button className="btn btn-primary ">Сохранить</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
};

RoomEditForm.propTypes = {
  roomId: PropTypes.string,
};
export default RoomEditForm;
