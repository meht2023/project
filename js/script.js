const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов',''),
      b = prompt('На сколько оценит его?',''),
      c = prompt('Один из просмотренных фильмов',''),
      d = prompt('На сколько оценит его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;