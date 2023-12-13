import React, { useState, useEffect, createContext } from "react";
import Login from "./pages/Login.jsx";
import { getToken } from "./api/spotifyLogin.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults.jsx";
import Player from "./components/Player.jsx";
import apiService from "./api/apiService.js";
import Sidebar from "./components/Sidebar.jsx";

export const StateContext = createContext(null);

function App() {
  const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      const _token = getToken();
      window.location.hash = "";
      if (_token) {
        setToken(_token);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setToken("");
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await apiService.get(`me/playlists`, {
          Authorization: "Bearer " + token,
        });
        setPlaylists(data.items);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, [token, playlists]);

  return (
    <StateContext.Provider
      value={{
        logout,
        token,
        playlists,
      }}
    >
      <div className="h-screen w-full">
        {token ? (
          <Router>
            <Navbar />
            <div className="flex gap-4">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </div>
            <Player />
          </Router>
        ) : (
          <Login />
        )}
      </div>
    </StateContext.Provider>
  );
}

export default App;
