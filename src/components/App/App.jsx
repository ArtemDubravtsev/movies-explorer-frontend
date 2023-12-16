import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

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
  const [isAuth] = useState(false);

  const Wrap = ({ children, header = true, footer = true }) => {
    return (
      <>
        {header && <Header isAuth={isAuth} />}
        {children}
        {footer && <Footer />}
      </>
    );
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Wrap>
              <Main />
            </Wrap>
          }
        />
        <Route
          path="/movies"
          element={
            <Wrap>
              <Movies />
            </Wrap>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <Wrap>
              <SavedMovies />
            </Wrap>
          }
        />
        <Route
          path="/profile"
          element={
            <Wrap footer={false}>
              <Profile />
            </Wrap>
          }
        />
        <Route path="/signin" element={<Register />} />
        <Route path="/signup" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
