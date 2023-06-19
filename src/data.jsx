// rooms images
import Room1Img from "./assets/img/rooms/1.png";
import Room1ImgLg from "./assets/img/rooms/1-lg.png";
import Room2Img from "./assets/img/rooms/2.png";
import Room2ImgLg from "./assets/img/rooms/2-lg.png";
import Room3Img from "./assets/img/rooms/3.png";
import Room3ImgLg from "./assets/img/rooms/3-lg.png";
import Room4Img from "./assets/img/rooms/4.png";
import Room4ImgLg from "./assets/img/rooms/4-lg.png";
import Room5Img from "./assets/img/rooms/5.png";
import Room5ImgLg from "./assets/img/rooms/5-lg.png";
import Room6Img from "./assets/img/rooms/6.png";
import Room6ImgLg from "./assets/img/rooms/6-lg.png";
import Room7Img from "./assets/img/rooms/7.png";
import Room7ImgLg from "./assets/img/rooms/7-lg.png";
import Room8Img from "./assets/img/rooms/8.png";
import Room8ImgLg from "./assets/img/rooms/8-lg.png";
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

export const roomData = [
  {
    id: 1,
    name: "Superior Room",
    description:
      "Indulge in Spacious Comfort: Immerse yourself in the tranquility of our superior room. With a generous size of 30m², it offers ample space for your utmost relaxation. Designed for the ultimate solo experience, it provides a peaceful retreat where you can unwind and rejuvenate. Treat yourself to the perfect blend of comfort and serenity in our superior room.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Signature Room",
    description:
      "Exquisite Luxury and Space: Experience the Epitome of Elegance in our Signature Room. Spanning an impressive 70m², this refined sanctuary is designed for utmost comfort and style. Perfect for couples or close companions, it offers ample space to relax and unwind together. Discover the perfect harmony of lavishness and intimacy in our Signature Room, where every moment becomes a cherished memory.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Deluxe Room",
    description:
      "Unwind in Comfort and Style: Step into our Deluxe Room, a spacious retreat spanning 50m². Designed with your utmost comfort in mind, this room offers an ideal sanctuary for relaxation. Accommodating up to three people, it provides ample space for you and your loved ones to enjoy a memorable stay. Discover a harmonious blend of comfort, style, and functionality in our Deluxe Room, where every moment is tailored to exceed your expectations.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Luxury Room",
    description:
      "Indulge in Opulent Serenity: Experience the Height of Luxury in our spacious Luxury Room. With its generous size of 50m², this lavish sanctuary offers abundant space for relaxation and rejuvenation. Designed to accommodate up to four people, it is perfect for families or groups seeking unrivaled comfort. Immerse yourself in an exquisite blend of elegance and comfort, where every detail is meticulously crafted to ensure a truly memorable stay in our Luxury Room.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: "Luxury Suite Room",
    description:
      "Unparalleled Luxury and Space: Discover the epitome of indulgence in our Luxury Suite Room. Spanning an expansive 90m², this lavish sanctuary offers an unrivaled experience in sophistication and comfort. With its impressive capacity for up to five people, it is the perfect choice for larger groups or families seeking the utmost in opulence. Embrace the grandeur and exclusivity of our Luxury Suite Room, where luxury knows no bounds and unforgettable moments await.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: "Deluxe Room",
    description:
      "Relax in Spacious Comfort: Unwind and recharge in our Deluxe Room, designed for ultimate relaxation. With a generous size of 45m², this well-appointed sanctuary offers ample space for your comfort. Accommodating up to six people, it is perfect for larger families or groups seeking a comfortable and enjoyable stay. Experience the perfect blend of comfort and convenience in our Deluxe Room, where every guest can create lasting memories.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: "Luxury Room",
    description:
      "Unmatched Luxury and Grandeur: Experience opulence like never before in our sprawling Luxury Room. With an impressive size of 84m², this sumptuous haven offers an abundance of space for pure indulgence. Designed to accommodate up to seven guests, it is the perfect choice for larger groups or families seeking unparalleled comfort. Immerse yourself in a world of refined luxury and sophistication in our Luxury Room, where extraordinary experiences await at every turn.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: "Deluxe Room",
    description:
      "Spacious Comfort for Larger Groups: Unwind in our Deluxe Room, offering an expansive size of 48m². Designed with ample space and comfort in mind, this room is ideal for accommodating larger groups of up to eight people. Embrace the perfect blend of relaxation and convenience, where everyone can enjoy a comfortable and memorable stay. Discover the ideal retreat for your group in our Deluxe Room, where comfort meets versatility in a welcoming ambiance.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Parking Space", icon: <FaParking /> },
      { name: "Swimming Pool", icon: <FaSwimmingPool /> },
      { name: "Breakfast", icon: <FaHotdog /> },
      { name: "GYM", icon: <FaStopwatch /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];
