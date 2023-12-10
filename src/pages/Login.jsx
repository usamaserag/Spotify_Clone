import React from "react";
import { FaSpotify } from "react-icons/fa";
import { loginURL } from "../api/spotifyLogin";

const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 w-full h-full">
      <div className="flex items-center gap-2 font-semibold text-6xl">
        <FaSpotify className="text-spotifyColor" />
        <span>Spotify</span>
      </div>
      <a href={loginURL} className="bg-spotifyColor rounded-full px-6 py-2 text-text_black font-semibold w-fit">
        LOG IN
      </a>
    </div>
  );
};

export default Login;
