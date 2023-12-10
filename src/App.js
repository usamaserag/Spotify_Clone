import React, { useState, useEffect, createContext } from "react";
import Login from "./pages/Login.jsx";
import { getToken } from "./api/spotifyLogin.js";
import Home from "./pages/Home.jsx";

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

  return (
    <StateContext.Provider
      value={{
        logout,
      }}
    >
      <div className="h-screen w-full">{token ? <Home /> : <Login />}</div>
    </StateContext.Provider>
  );
}

export default App;
