
const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie = movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}



// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  //let result = array.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// I'm confused here -> if I add .toLowerCase() to movie.director and director, to try
// to make the function case insensitive, test fails on the following:
//  -  should return an array
//  - should return a new array, not update the original one
// however it passes: "should return a new array with the movies from director".
// I have not been able to solve that...


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);
  let result = parseFloat((movies.map(movie => movie.score).reduce((total, num) => (total + num), 0) / movies.length).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result
}



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.toSorted((movie1, movie2) => {
    if (movie1.title < movie2.title) return -1;
    else if (movie1.title > movie2.title) return 1;
    else return 0;
  }).slice(0, 20).map(movie => movie.title);
  console.log("EXERCICE 4 ->", result);
  return result
}



// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.toSorted((movie1, movie2) => {
    return (movie1.title < movie2.title) ? -1 : (movie1.title > movie2.title) ? 1 : 0
  }).sort((movie1, movie2) => {
    return (movie1.year < movie2.year) ? -1 : (movie1.year > movie2.year) ? 1 : 0
  });
  console.log("EXERCICE 5 ->", result);
  return result
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let movies = array.filter(movie => movie.genre.map(genre => genre.toLowerCase()).includes(category.toLowerCase()));
  let result = parseFloat((movies.map(movie => movie.score).reduce((total, num) => (total + num), 0) / movies.length).toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(film => {
    let time = film.duration.replace(/[a-z]/g, "").split(" ");
    let hours = Number(time[0]) * 60;
    let minutes = time.length > 1 ? Number(time[1]) : 0;
    return { ...film, duration: hours + minutes };
  });
  console.log("EXERCICE 7 ->", result);
  return result;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = array.filter(movie => movie.year === year)
    .toSorted((movie1, movie2) => movie1.score < movie2.score ? 1 : movie2.score < movie1.score ? -1 : 0).slice(0, 1);
  console.log("EXERCICE 8 ->", result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
