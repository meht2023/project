const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log('ВЫ класический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('ВЫ киноман');
} else {
    console.log('Произошла ошибка');
}

      

