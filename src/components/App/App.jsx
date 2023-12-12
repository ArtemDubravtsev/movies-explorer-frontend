import React from "react";
import { Route, Routes } from "react-router-dom";
import PresentationPage from "../PresentationPage/PresentationPage";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<PresentationPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/signup" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
