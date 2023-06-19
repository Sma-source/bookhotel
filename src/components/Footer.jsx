import React from "react";
// Logo
import LogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        {/* logo */}
        <a href="/">
          <img src={LogoWhite} alt="logo" className="pb-4 lg:pb-0" />
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
