'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generic: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('Оценка фильма?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('Оценка фильма?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


