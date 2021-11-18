import React from "react";
import { useParams } from "react-router-dom";
import RoomsListPage from "../common/page/roomsListPage/roomsListPage";
import RoomPage from "../common/page/roomPage/roomPage";

const Rooms = () => {
  const params = useParams();
  const { roomId } = params;
  return <>{roomId ? <RoomPage roomId={roomId} /> : <RoomsListPage />}</>;
};

export default Rooms;
