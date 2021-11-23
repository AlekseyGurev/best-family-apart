import img1 from "../../img/Apart_1_IMG_9305.jpg";
import img2 from "../../img/Apart_2_IMG_9313.jpg";
import img3 from "../../img/Apart_3_IMG_9332.jpg";
import img4 from "../../img/Apart_4_IMG_9334.jpg";

import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";
import img7 from "../../img/7.jpg";
import img8 from "../../img/8.jpg";

import img9 from "../../img/9.jpg";
import img10 from "../../img/10.jpg";
import img11 from "../../img/11.jpg";
import img12 from "../../img/12.jpg";

const services = {
  wifi: {
    _id: "1",
    name: "WiFi",
  },
  hairDryer: {
    _id: "2",
    name: "Фен",
  },
  bar: {
    _id: "3",
    name: "Мини-бар",
  },
  coffe: {
    _id: "4",
    name: "Кофемашина",
  },
  tv: {
    _id: "5",
    name: "ТВ",
  },
  safe: {
    _id: "6",
    name: "Сейф",
  },
};

const rooms = [
  {
    _id: "1111",
    price: "5000",
    img: img1,
    services: [services.bar, services.coffe, services.hairDryer],
    name: "Апартаменты с видом на море",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "2222",
    price: "4000",
    img: img5,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
    ],
    name: "Апартаменты с видом на сад",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "3333",
    price: "8000",
    img: img7,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
      services.safe,
    ],
    name: "Улучшенные апартаменты",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "4444",
    price: "3000",
    img: img4,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
    ],
    name: "Одноместный номер",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "5555",
    price: "5000",
    img: img2,
    services: [services.bar, services.coffe, services.hairDryer],
    name: "Апартаменты с видом на море",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "6666",
    price: "4000",
    img: img6,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
    ],
    name: "Апартаменты с видом на сад",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "7777",
    price: "8000",
    img: img3,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
      services.safe,
    ],
    name: "Улучшенные апартаменты",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "8888",
    price: "3000",
    img: img8,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
    ],
    name: "Одноместный номер",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "9999",
    price: "5000",
    img: img9,
    services: [services.bar, services.coffe, services.hairDryer],
    name: "Апартаменты с видом на море",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "1000",
    price: "4000",
    img: img10,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
    ],
    name: "Апартаменты с видом на сад",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "1",
    price: "1100",
    img: img11,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
      services.safe,
    ],
    name: "Улучшенные апартаменты",
    text: "Номер оборудован кухней и обеденной зоной,что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартира расположена на втором этаже с видом на Олимпийский парк, вход по лестнице.",
  },
  {
    _id: "1200",
    price: "3000",
    img: img12,
    services: [
      services.bar,
      services.coffe,
      services.hairDryer,
      services.wifi,
      services.tv,
    ],
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
