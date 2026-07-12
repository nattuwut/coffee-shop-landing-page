import Latte from "../assets/Img/LatteImg.jpg"
import Espresso from "../assets/Img/EspressoImg.jpg"
import Cappuccino from "../assets/Img/CappuccinoImg.jpg"

const menuData = [
  {
    id:1,
    image: Latte,
    alt: "Latte",
    name: "Latte",
    description: "Smooth espresso with steamed milk.",
    price: "$4.50",
  },

  {
    id:2,
    image: Espresso,
    alt: "Espresso",
    name: "Espresso",
    description: "Strong and rich coffee.",
    price: "$3.50",
  },

  {
    id:3,
    image: Cappuccino,
    alt: "Cappuccino",
    name: "Cappuccino",
    description: "Espresso with steamed milk foam.",
    price: "$4.00",
  },
];

export default menuData;