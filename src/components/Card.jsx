import React from "react";
import { FaPlay } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card bg-base-300 hover:bg-base-200 transition-all duration-500 ease-in-out shadow-xl w-40 p-4 cursor-pointer">
      <div className="w-full h-32 m-auto mb-2">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-full object-cover h-full w-full"
        />
      </div>
      <div className="items-center">
        <h2 className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full">Spotify card</h2>
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full">Artist</p>
        <div className="card-actions absolute inset-0 flex items-center justify-end opacity-0 transform translate-y-6 hover:opacity-100 hover:translate-y-0 transition-all duration-500 ease-in-out">
          <button className="mr-4 w-12 h-12 rounded-full bg-spotifyColor flex items-center justify-center"><FaPlay className="text-text_black text-xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
