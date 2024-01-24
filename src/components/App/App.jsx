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
  //юзер контекст
  const [currentUser, setCurrentUser] = useState({});
  //мувис
  const [movies, setMovies] = useState([]);
  //отправка данных
  const [isSend, setIsSend] = useState(false);
  //редактирование данных юзера
  const [isEditData, setIsEditData] = useState(false);
  //ответ результата редакт.данных
  const [isEditAnswer, setIsEditAnswer] = useState(false);
  //ошибки
  const [isError, setIsError] = useState(false);

  function handleRegister(username, email, password) {
    setIsSend(true);
    registration(username, email, password)
      .then(() => {
        navigate("/signin");
        setIsSend(false);
      })
      .catch((err) => {
        console.error(`Ошибка при регистрации ${err}`);
      });
  }

  function handleLogin(email, password) {
    setIsSend(true);
    authorization(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
        setIsSend(false);
      })
      .catch((err) => {
        console.error(`Ошибка при авторизации ${err}`);
      });
  }

  function handleUpdateUser(dataUser) {
    setIsSend(true);
    MainApi.setProfilInfo(dataUser, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsEditData(false);
        setIsSend(false);
        setIsEditAnswer(true);
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при редактировании данных ${error}`);
      })
      .finally(() => {
        setIsSend(false);
      });
  }

  function handleLogOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        MainApi.getInfo(localStorage.jwt),
        MoviesApi.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser);
          setMovies(dataMovies);
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
                    isSend={isSend}
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
                    isSend={isSend}
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
                  handleLogin={handleLogin}
                  handleLogOut={handleLogOut}
                  isSend={isSend}
                  isEditData={isEditData}
                  setIsEditData={setIsEditData}
                  isEditAnswer={isEditAnswer}
                  setIsEditAnswer={setIsEditAnswer}
                  isError={isError}
                  setIsError={setIsError}
                />
              }
            ></Route>

            <Route
              path="/signup"
              element={
                <Register handleRegister={handleRegister} isSend={isSend} />
              }
            />

            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} isSend={isSend} />}
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
