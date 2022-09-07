export default [
  {
    id: 1,
    name: "Broccoli",
    image: "",
    measure: "300g",
    expiry: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Milk",
    image: "",
    measure: "300g",
    expiry: new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: "Cheese",
    image: "",
    measure: "1kg",
    expiry: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000),
  },
  {
    id: 4,
    name: "Lettuce",
    image: "",
    measure: "300g",
    expiry: new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000),
  },
];
