class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _getResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject({ status: res.status, res: res });
  }

  getInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  setProfilInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.username,
        email: data.email,
      }),
    }).then(this._getResponse);
  }

  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  saveMovies(data, token) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._getResponse);
  }

  deleteMovies(cardId, token) {
    return fetch(`${this._url}/movies/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.artmovie.nomoredomainsmonster.ru",
});

export default mainApi;
