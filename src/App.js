import React, { useState, useEffect, createContext } from "react";
import Login from "./pages/Login.jsx";
import { getToken } from "./api/spotifyLogin.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults.jsx";
import Player from "./components/Player.jsx";
import apiService from "./api/apiService.js";


export const StateContext = createContext(null);

function App() {
  const [token, setToken] = useState("");

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

        console.log(data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, [token])


  return (
    <StateContext.Provider
      value={{
        logout,
        token,
      }}
    >
      <div className="h-screen w-full">
        {token ? (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
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
