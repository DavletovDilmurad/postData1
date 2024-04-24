import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-96 justify-between">
      <div>
        <h1 className="text-3xl">logo</h1>
      </div>
      <div className="flex gap-10">
        <p className="text-[20px]">home</p>
        <p className="text-[20px]">about</p>
        <p className="text-[20px]">contact</p>
      </div>
      <div className="gap-5 flex">
        <button className="w-20 bg-red-500 text-white h-[30px] rounded-md">
          login
        </button>
        <button className="w-20 bg-green-500 text-white h-[30px] rounded-md">
          register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
