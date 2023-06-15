import React, { useContext } from "react";
// room context
import { RoomContext } from "../context/RoomContext";
// headless ui menu
import { Menu } from "@headlessui/react";
// icons
import { BsChevronDown } from "react-icons/bs";

const list = [
  { name: "1 Adult" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];

const AdultsDropdown = () => {
  return (
    <Menu as="div">
      {/* btn */}
      <Menu.Button>
        adults
        <BsChevronDown />
      </Menu.Button>
      {/* items */}
      <Menu.Items as="ul">
        {list.map((li, index) => {
          return (
            <Menu.Item as="li" key={index}>
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
