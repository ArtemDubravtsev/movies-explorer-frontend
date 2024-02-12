import React from "react";
import {
  registration,
  authorization,
  getUserData,
} from "../../utils/RegisterAuth";
import MainApi from "../../utils/MainApi";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
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
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  //регистрация/авторизация
  const [loggedIn, setLoggedIn] = useState(false);
  //проверка токена
  const [isCheckToken, setIsCheckToken] = useState(true);
  //юзер контекст
  const [currentUser, setCurrentUser] = useState({});
  //отправка данных(прелоадер)
  const [isSend, setIsSend] = useState(false);
  //редактирование данных юзера
  const [isEditData, setIsEditData] = useState(false);
  //ответ результата редакт.данных
  const [isEditAnswer, setIsEditAnswer] = useState(false);
  //ошибки
  const [isError, setIsError] = useState(false);
  //сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);

  function handleRegister(username, email, password) {
    setIsSend(true);
    registration(username, email, password)
      .then(() => {
        handleLogin(password, email);
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка при регистрации ${err}`);
      })
      .finally(() => {
        setIsSend(false);
      });
  }

  function handleLogin(password, email) {
    setIsSend(true);
    authorization(password, email)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        setCurrentUser(res);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setIsError(true);
        console.error(`Ошибка при авторизации ${err}`);
      })
      .finally(() => {
        setIsSend(false);
      });
  }

  function handleUpdateUser(dataUser) {
    setIsSend(true);
    MainApi.setProfilInfo(dataUser, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsEditData(false);
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
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.clear();
    navigate("/");
  }

  function handleLikeMovie(data) {
    const isLikeMovie = savedMovies.some((item) => data.id === item.movieId);
    const filterMovie = savedMovies.filter((item) => {
      return item.movieId === data.id;
    });
    if (isLikeMovie) {
      handleDeleteMovie(filterMovie[0]._id);
    } else {
      MainApi.saveMovies(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка при лайке фильма ${err}`));
    }
  }

  function handleDeleteMovie(movieId) {
    MainApi.deleteMovies(movieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((item) => {
            return item._id !== movieId;
          })
        );
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`));
  }

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        MainApi.getInfo(localStorage.jwt),
        MainApi.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser);
          setSavedMovies(dataMovies);
          setLoggedIn(true);
          setIsCheckToken(false);
        })
        .catch((error) => {
          console.log(`Ошибка при создании данных ${error}`);
          setIsCheckToken(false);
        });
    } else {
      setIsCheckToken(false);
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
          {isCheckToken ? (
            <Preloader />
          ) : (
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
                      isSend={isSend}
                      setIsSend={setIsSend}
                      isError={isError}
                      setIsError={setIsError}
                      savedMovies={savedMovies}
                      handleLikeMovie={handleLikeMovie}
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
                      isSend={isSend}
                      setIsSend={setIsSend}
                      isError={isError}
                      setIsError={setIsError}
                      savedMovies={savedMovies}
                      handleDeleteMovie={handleDeleteMovie}
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
                path={"/signup"}
                element={
                  loggedIn ? (
                    <Navigate to="/movies" replace />
                  ) : (
                    <Register
                      handleRegister={handleRegister}
                      isSend={isSend}
                      isError={isError}
                      setIsError={setIsError}
                    />
                  )
                }
              />

              <Route
                path={"/signin"}
                element={
                  loggedIn ? (
                    <Navigate to="/movies" replace />
                  ) : (
                    <Login
                      handleLogin={handleLogin}
                      isSend={isSend}
                      isError={isError}
                      setIsError={setIsError}
                    />
                  )
                }
              />

              <Route path="*" element={<Page404 />} />
            </Routes>
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
