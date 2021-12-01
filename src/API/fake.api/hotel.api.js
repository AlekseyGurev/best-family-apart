import imgHotel from "../../img/Apart_3_IMG_9369.jpg";
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

const hotel = {
  _id: "1",
  img: [
    imgHotel,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ],
  name: "Best Family Apart ",
  text: "Выбор тех, кому нужен по-настоящему тихий и уютный дом, в самом эпицентре туристического Адлера. Номера оборудованы кухней и обеденной зоной, что оставляет вам право выбора: утонуть в суете и шуме окружающих кафе или насладиться тишиной и уютом, оставшись в апартаментах с бокалом вина и хорошей книгой.Квартиры расположены на втором этаже с видом на Олимпийский парк, вход по лестнице.Современное оснащение: дизайнерская мебель, ЖК - телевизор, бытовая техника, необходимая посуда, высокоскоростной Wi-Fi.Удобное расположение и услуга трансфера позволит вам легко и с комфортом добраться до любой достопримечательности города: пляж, Олимпийский парк, Красная поляна, Сочи, Абхазия и др.",
  services: [
    {
      _id: "1",
      text: "Трансфер в любую точку города. В наличии два автомобиля представительского класса. Трансфер в аэропорт займёт не более 10 минут.",
    },
    { _id: "2", text: "Аренда мопеда для быстрого перемещения по городу." },
    { _id: "3", text: "Домашнее, вкуснейшее вино." },
  ],
};

if (!localStorage.getItem("hotel")) {
  localStorage.setItem("hotel", JSON.stringify(hotel));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("hotel")));
    }, 2000);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const hotel = JSON.parse(localStorage.getItem("hotel"));
    const hotelIndex = hotel.findIndex((u) => u._id === id);
    hotel[hotelIndex] = { ...hotel[hotelIndex], ...data };
    localStorage.setItem("hotel", JSON.stringify(hotel));
    resolve(hotel[hotelIndex]);
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchAll,
  update,
};
