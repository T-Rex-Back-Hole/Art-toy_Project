import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 p-4 text-white text-center">
        &copy; ${new Date().getFullYear()} T-Rex Black Hole. All rights
        reserved.
      </footer>
    </>
  );
};

export default Footer;
