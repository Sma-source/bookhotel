import React, { useContext } from "react";
// useParams ID
import { useParams } from "react-router-dom";
// components
// import { AdultsDropdown } from "../components/AdultsDropdown";
// import { CheckIn } from "../components/CheckIn";
// import { KidsDropdown } from "../components/KidsDropdown";
// import { ChekOut } from "../components/CheckOut";
// context
import { RoomContext } from "../context/RoomContext";
// icons
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  // destructure room
  const { name, description, facilities, imageLg, price } = room;
  return <div>RoomDetails</div>;
};

export default RoomDetails;
