import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
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
        <Route
          path="/"
          element={
            <>
              <Header name="promo" loggedIn={true} />
              <Main />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={true} />
              <Movies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={true} />
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={true} />
              <Profile />
            </>
          }
        ></Route>

        <Route path="/signin" element={<Register />} />

        <Route path="/signup" element={<Login />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
