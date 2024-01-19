import React from "react";
import {
  registration,
  authorization,
  getUserData,
} from "../../utils/RegisterAuth";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  //регистрация/авторизация
  const [loggedIn, setLoggedIn] = useState(false);
  //юзер
  const [currentUser, setCurrentUser] = useState({});
  //мувис
  const [movies, setMovies] = useState([]);
  //прелоадер
  const [isPreloader, setIsPreloader] = useState(true);

  function handleUpdateUser(dataUser) {
    setIsPreloader(true);
    MainApi.setProfilInfo(dataUser, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsPreloader(false);
      })
      .catch((error) =>
        console.log(`Ошибка при редактировании данных ${error}`)
      );
  }

  useEffect(() => {
    setIsPreloader(true);
    if (loggedIn) {
      Promise.all([
        MainApi.getInfo(localStorage.jwt),
        MoviesApi.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser);
          setMovies(dataMovies);
          setIsPreloader(false);
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
  }, []);

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
                  <Header loggedIn={loggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            ></Route>

            <Route
              path="/movies"
              element={
                <>
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    movies={movies}
                    isPreloader={isPreloader}
                  />
                  <Footer />
                </>
              }
            ></Route>

            <Route
              path="/saved-movies"
              element={
                <>
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    movies={movies}
                    isPreloader={isPreloader}
                  />
                  <Footer />
                </>
              }
            ></Route>

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                  isPreloader={isPreloader}
                />
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
