import React, { useContext } from "react";
// context
import { RoomContext } from "../context/RoomContext";
// components
import Room from "../components/Room";
// loader
import { SpinnerCircularFixed } from "spinners-react";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);
  return (
    <section className="py-24">
      {/* overlay & spinner */}
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
          <SpinnerCircularFixed color="#967142" size={75} />
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
