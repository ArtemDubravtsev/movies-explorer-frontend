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
}

const mainApi = new MainApi({
  // baseUrl: "https://api.artmovie.nomoredomainsmonster.ru",
  baseUrl: "http://localhost:3000",
});

export default mainApi;
