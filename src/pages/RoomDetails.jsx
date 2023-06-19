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
  return (
    <section className="bg-pink-200">
      {/* banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70" />
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
    </section>
  );
};

export default RoomDetails;
