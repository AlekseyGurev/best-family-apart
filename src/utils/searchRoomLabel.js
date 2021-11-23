export function searchRoomLabel(room, value) {
  if (String(room).toLowerCase().indexOf(String(value).toLowerCase()) !== -1) {
    return true;
  } else {
    return false;
  }
}
