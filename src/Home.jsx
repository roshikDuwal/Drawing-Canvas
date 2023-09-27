import React from "react";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col w-full h-full justify-center items-center border-2 gap-5 p-4">
        <h1 className="font-bold text-4xl">DRAW NOW</h1>

        <NavLink className="underline" to="/answer">Draw Here</NavLink>
      </div>
    </>
  );
};

export default Home;
