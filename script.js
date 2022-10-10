const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovies = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?'),
      b = prompt('Оценка фильма?'),
      c = prompt('Один из просмотренных фильмов?'),
      d = prompt('Оценка фильма?');

personalMovies.movies[a] = b;
personalMovies.movies[c] = d;


