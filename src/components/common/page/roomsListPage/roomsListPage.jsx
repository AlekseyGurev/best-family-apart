import React, { useState, useEffect } from "react";
import api from "../../../../API";
import Rooms from "../../ui/rooms";
import Pagination from "../../pagination";
import { paginate } from "../../../../utils/paginate";
import { searchRoomLabel } from "../../../../utils/searchRoomLabel";
import _ from "lodash";
import SearchRooms from "../../searchRooms";
import SortServicesList from "../../ui/sortServicesList/sortServicesList";

const RoomsListPage = () => {
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRoom, setSearchRoom] = useState("");
  const [rooms, setRooms] = useState();
  const [services, setServices] = useState();
  useEffect(() => {
    api.rooms.fetchAll().then((roomsData) => {
      setRooms(roomsData);
    });
  }, []);

  useEffect(() => {
    api.services.fetchAll().then((servicesData) => {
      setServices(
        Object.keys(servicesData).map((service) => ({
          ...servicesData[service],
          value: false,
        }))
      );
    });
  }, []);

  const handlePageCahge = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (rooms && services) {
    const filteredRoom =
      searchRoom !== ""
        ? rooms.filter((room) => searchRoomLabel(room.name, searchRoom))
        : rooms;
    let filterServicesRoom = [];
    let filterService = services.filter((service) => service.value === true);

    filteredRoom.forEach((room) => {
      let roomCount = 0;
      room.services.forEach((roomService) =>
        filterService.forEach((service) => {
          if (roomService.name === service.name) {
            roomCount++;
          }
        })
      );
      if (roomCount === filterService.length) {
        filterServicesRoom.push(room);
      }
    });

    const count =
      filterServicesRoom.length > 0
        ? filterServicesRoom.length
        : filteredRoom.length;
    const handleSearch = ({ target }) => {
      clearFilter();
      setSearchRoom(target.value);
    };
    const roomsCrop = paginate(
      filterServicesRoom.length > 0 ? filterServicesRoom : filteredRoom,
      currentPage,
      pageSize
    );
    const clearFilter = () => {
      setSearchRoom("");
    };
    const handleServicesSelect = (item) => {
      setServices(
        services.map((service) =>
          service.name === item.name
            ? { ...service, value: item.value }
            : service
        )
      );
    };
    return (
      <div className="container">
        <div class="row">
          <div class="card col-sm-2 p-2">
            {services && (
              <SortServicesList
                itemSelect={handleServicesSelect}
                services={services}
              />
            )}
          </div>
          <div class="card col-sm-9 mx-2">
            <div className="d-flex justify-content-between">
              <h2 className="p-2">Доступные номера</h2>
              <SearchRooms value={searchRoom} handleSearch={handleSearch} />
            </div>

            {filterService.length > filterServicesRoom ? (
              <div className="p-2">
                <h4 className="text-danger">Номеров с такими услугами нет</h4>
              </div>
            ) : (
              <div>
                <div className="row row-cols-1 row-cols-md-3 g-3 mb-2">
                  {roomsCrop.map((room) => (
                    <Rooms
                      key={room._id}
                      id={room._id}
                      img={room.img}
                      name={room.name}
                    />
                  ))}
                </div>

                <div className="d-flex">
                  <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageCahge}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="mb-4">Доступные номера</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <h2>Loading...</h2>
      </div>
    </div>
  );
};

export default RoomsListPage;
