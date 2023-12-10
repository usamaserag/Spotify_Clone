import React, { useContext } from "react";
import { StateContext } from "../App";
import { FaSpotify } from "react-icons/fa";
import user_image from "../assets/user.jpeg";

const Navbar = () => {
  const { logout } = useContext(StateContext);
  return (
    <div className="navbar bg-base-100 gap-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 font-semibold md:text-2xl text-lg">
          <FaSpotify className="text-spotifyColor" />
          <span>Spotify</span>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 gap-2">
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 md:w-10 rounded-full">
              <img alt="user" src={user_image} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className="justify-between">
              <button>Profile</button>
            </li>
            <li className="justify-between">
              <button>Settings</button>
            </li>
            <li onClick={logout} className="justify-between">
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
