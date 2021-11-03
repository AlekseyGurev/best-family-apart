import React, { useState, useEffect } from "react";
import api from "../../API";

const Hotel = () => {
  const [hotel, setHotel] = useState();
  useEffect(() => {
    api.hotel.fetchAll().then((hotelData) => {
      setHotel(hotelData);
    });
  }, []);
  return (
    <div className="container">
      {hotel ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={hotel.img}
                className="img-fluid rounded-start  p-4"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.text}</p>
                <h6 className="card-title">Услуги</h6>
                <ul>
                  {hotel.services.map((service) => (
                    <li key={service._id}>{service.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Hotel;
