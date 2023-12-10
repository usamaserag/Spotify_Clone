import React from "react";
import CreatePlaylist from "./CreatePlayList";
import Modal from "./Modal";

const Player = () => {
  return (
    <div>
      <Modal btnText="Create Playlist" id_modal="playlist">
        <CreatePlaylist />
      </Modal>
    </div>
  );
};

export default Player;
