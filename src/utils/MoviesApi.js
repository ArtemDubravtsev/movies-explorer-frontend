class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _getResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject({ status: res.status, res: res });
  }

  requestMovies(url, options) {
    return fetch(`${this._url}${url}`, options).then(this._getResponse);
  }

  getMovies() {
    return this.requestMovies("/");
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
