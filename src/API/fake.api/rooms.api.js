import img1 from "../../img/Apart_1_IMG_9305.jpg";
import img2 from "../../img/Apart_2_IMG_9313.jpg";
import img3 from "../../img/Apart_3_IMG_9332.jpg";
import img4 from "../../img/Apart_4_IMG_9334.jpg";

const rooms = [
  {
    _id: "1111",
    img: img1,
    name: "Апартаменты с видом на море",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "2222",
    img: img2,
    name: "Апартаменты с видом на сад",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "3333",
    img: img3,
    name: "Улучшенные апартаменты",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "4444",
    img: img4,
    name: "Одноместный номер",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
];

if (!localStorage.getItem("rooms")) {
  localStorage.setItem("rooms", JSON.stringify(rooms));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("rooms")));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const rooms = JSON.parse(localStorage.getItem("rooms"));
    const roomsIndex = rooms.findIndex((u) => u._id === id);
    rooms[roomsIndex] = { ...rooms[roomsIndex], ...data };
    localStorage.setItem("rooms", JSON.stringify(rooms));
    resolve(rooms[roomsIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("rooms")).find(
          (room) => room._id === id
        )
      );
    }, 1000);
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchAll,
  getById,
  update,
};
