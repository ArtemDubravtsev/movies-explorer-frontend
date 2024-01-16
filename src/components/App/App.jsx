import React from "react";

import MainApi from "../../utils/MainApi";
import {
  registration,
  authorization,
  getUserData,
} from "../../utils/RegisterAuth";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

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
  const navigate = useNavigate();
  //регистрация/авторизация
  const [loggedIn, setLoggedIn] = useState(false);
  //контекст
  const [currentUser, setCurrentUser] = useState({});

  function handleUpdateUser(dataUser) {
    MainApi.setProfilInfo(dataUser, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) =>
        console.log(`Ошибка при редактировании данных ${error}`)
      );
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([MainApi.getInfo(localStorage.jwt)])
        .then(([dataUser]) => {
          setCurrentUser(dataUser);
        })
        .catch((error) => console.log(`Ошибка при создании данных ${error}`));
    }
  }, [loggedIn]);

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
    <CurrentUserContext.Provider value={currentUser}>
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
                  <Profile onUpdateUser={handleUpdateUser} />
                </>
              }
            ></Route>

            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />

            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
