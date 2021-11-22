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
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(services);
    }, 2000);
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchAll,
};
