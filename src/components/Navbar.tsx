import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row h-16 sm:p-2 md:p-4 lg:p-6 bg-gray-800 text-white justify-between items-center">
      <div className="font-bold">
        <h2 className="text-xl">Cinemastic database</h2>
      </div>
      <div className="flex flex-row gap-4 ">
        <NavLink
          to="/"
          className="font-normal pt-1"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
      
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="font-normal pt-1"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
      
        >
          Movies
        </NavLink>
        <NavLink
          to="/tv"
          className="font-normal pt-1"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
      
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/favorite"
          className="font-normal pt-1"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "white",
          })}
      
        >
          Your Favorite
        </NavLink>

        <div className="h-8 w-8 rounded-full border-1 bg-white text-gray-800 flex items-center justify-center">
          <p className="m-2 p-2">PP</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
