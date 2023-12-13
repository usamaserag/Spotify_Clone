import React, { useContext } from "react";
import { GoHome, GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import CreatePlaylist from "./CreatePlayList";
import Modal from "./Modal";
import { FaPlus, FaList } from "react-icons/fa";
import { StateContext } from "../App";

const Sidebar = () => {
  const { playlists } = useContext(StateContext);

  return (
    <aside className="flex flex-col gap-2 h-full">
      <div className="p-4 rounded-lg bg-base-300 flex items-center justify-center">
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              to="/"
              className="flex items-center gap-4 font-semibold text-lg"
            >
              <GoHome />
              <span className="hidden md:block">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="flex items-center gap-4 font-semibold text-lg"
            >
              <GoSearch />
              <span className="hidden md:block">Search</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4 rounded-lg bg-base-300 flex flex-col gap-4 items-center justify-center">
        <Modal btnText={<FaPlus />} id_modal="playlist">
          <CreatePlaylist />
        </Modal>

        <h3 className="md:py-1 md:px-6 rounded-full bg-base-100 inline-block">
          <FaList className="md:hidden" />
          <span className="hidden md:block">Playlist</span>
        </h3>
        {playlists.map((list) => (
          <div key={list.id}>{list.name}</div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
