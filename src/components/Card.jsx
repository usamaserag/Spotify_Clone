import React from "react";
import { FaPlay } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card bg-base-200 shadow-xl w-40 p-4">
      <div className="w-full h-32 m-auto">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl object-cover h-full w-full"
        />
      </div>
      <div className="items-center text-center">
        <h2 className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full">Shoes!</h2>
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions absolute inset-0 flex items-center justify-end opacity-0 transform translate-y-6 hover:opacity-100 hover:translate-y-0 transition-all duration-300 ease-in-out">
          <button className="mr-4 w-12 h-12 rounded-full bg-spotifyColor flex items-center justify-center"><FaPlay className="text-text_black text-xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
