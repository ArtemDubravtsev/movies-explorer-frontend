class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _getResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject({ status: res.status, res: res });
  }

  getMovies(token) {
    return fetch(`${this._url}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
