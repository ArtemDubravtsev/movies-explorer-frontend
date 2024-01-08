import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";

import {
  registration,
  authorization,
  getUserData,
} from "../../utils/RegisterAuth";

function App() {
  const navigate = useNavigate();
  //регистрация/авторизация
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.jwt) {
      getUserData(localStorage.jwt)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => console.error(`Ошибка при авторизации ${err}`));
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  function handleRegister(username, email, password) {
    registration(username, email, password)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.error(`Ошибка при регистрации ${err}`);
      });
  }

  function handleLogin(email, password) {
    authorization(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(`Ошибка при авторизации ${err}`);
      });
  }

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

          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />

          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
