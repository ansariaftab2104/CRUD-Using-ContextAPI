import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-600 text-white w-full flex justify-between items-center py-3 px-5">
      <div className="logo">
        <h1 className="font-semibold text-xl">Logo</h1>
      </div>
      <nav className="flex gap-5 text-base">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Service</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="btn">
        <button className="bg-green-900 p-2 rounded border-0">Create</button>
      </div>
    </div>
  );
};

export default Navbar;
