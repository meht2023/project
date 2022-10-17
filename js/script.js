'use strict';

let numberofFilms;

function start () {
    numberofFilms = prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberofFilms == '' || numberofFilms == 'null' || isNaN(numberofFilms)) {
        numberofFilms = prompt('Сколько фильмов вы уже посмотрели?','');
    }

}

start();

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () { 
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из просмотренных фильмов',''),
                  b = prompt('На сколько оценит его?','');

        if (a != null && b != null && a != '' & b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonlLevel () {if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log('ВЫ класический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('ВЫ киноман');
} else {
    console.log('Произошла ошибка');
    }
}

// detectPersonlLevel();

function showMyDB (obj) {
    if (!obj) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
      

