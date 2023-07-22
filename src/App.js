import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { store } from "./store"
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Playlist from "./components/PlayList";
import Explore from "./components/Explore";


const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Body />} />
      <Route exact path="/detail/:id" element={<Details />} />
      <Route path="/favorites" element={<Playlist />} />
      <Route path="/explore" element={<Explore />} />
      </Routes>
    </Provider>
  );
};

export default App;

