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
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/movies"
            element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/saved-movies"
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          ></Route>

          <Route path="/signup" element={<Register />} />

          <Route path="/signin" element={<Login />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
