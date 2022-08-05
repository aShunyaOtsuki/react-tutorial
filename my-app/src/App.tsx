import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./reducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";
import { Home } from "./Home";
import { Game } from "./Game";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
