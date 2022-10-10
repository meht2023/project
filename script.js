const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovies = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из просмотренных фильмов?'),
          b = prompt('Оценка фильма?');

    if (a != null && b != null && a !='' && b != '' && a.length < 50 ){
        personalMovies.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
    
    if (personalMovies.count < 10) {
        console.log('Просмотрено довольно мало филльмов');
    } else if (personalMovies.count >= 10 && personalMovies.count < 30) {
        console.log('Вы классный зритель!');
    } else if (personalMovies.count > 30){
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }
}
    console.log(personalMovies);
