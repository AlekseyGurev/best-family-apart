import React, { useState, useEffect } from "react";
import api from "../../../../API";
import Rooms from "../../ui/rooms";
import Pagination from "../../pagination";
import { paginate } from "../../../../utils/paginate";
import { searchRoomLabel } from "../../../../utils/searchRoomLabel";
import _ from "lodash";
import SearchRooms from "../../searchRooms";

const RoomsListPage = () => {
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRoom, setSearchRoom] = useState("");
  const [rooms, setRooms] = useState();
  useEffect(() => {
    api.rooms.fetchAll().then((roomsData) => {
      setRooms(roomsData);
    });
  }, []);

  const handlePageCahge = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (rooms) {
    const filteredRoom =
      searchRoom !== ""
        ? rooms.filter((room) => searchRoomLabel(room.name, searchRoom))
        : rooms;
    const count = filteredRoom.length;
    const handleSearch = ({ target }) => {
      clearFilter();
      setSearchRoom(target.value);
    };
    const roomsCrop = paginate(filteredRoom, currentPage, pageSize);
    const clearFilter = () => {
      setSearchRoom("");
    };
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2 className="p-2">Доступные номера</h2>
          <SearchRooms value={searchRoom} handleSearch={handleSearch} />
        </div>
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
