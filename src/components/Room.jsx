import React from "react";
//link
import { Link } from "react-router-dom";
// icons
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  // destructure room
  const { id, name, image, size, maxPerson, description, price } = room;
  return <div>Room</div>;
};

export default Room;
