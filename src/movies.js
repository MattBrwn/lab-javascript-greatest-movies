// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directorsArr = movies.map(movies => movies.director)
        return directorsArr;
    }


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// if (arr.length === 0) { console.log("Array is empty!") }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let directorsArr = movies.filter((elem) => {
            if (elem.genre.includes("Drama") && elem.director === "Steven Spielberg") {
            return true }
    })
    return directorsArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) { 
        // case of empty array
        if (!movies.length) {
            return 0;
        }
    let ratesTotal = movies.reduce((total, actual) => { 
        if (actual.rate) {
            return total + actual.rate;
        } else {
            return total;
        }
        },0);

    return Number((ratesTotal/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaArr = movies.filter(eachMovie => eachMovie.genre.includes("Drama"));
    return ratesAverage(dramaArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    // Copy, since sort mutates original array
    let yearsortedArray =  JSON.parse(JSON.stringify(movies));

  yearsortedArray.sort((first, second) => {
      // sort by year
      if (first.year > second.year) {
        return 1; 
      } else if (first.year < second.year) {
        return -1;
      } else  {
        // sort within year
        if (first.title > second.title) {
        return 1;
        } else if (first.title < second.title){
        return -1;
        }
        return 0;
    }
    });
    return yearsortedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let moviesArray = JSON.parse(JSON.stringify(movies));
    
    alphabsortedArray = moviesArray.sort((first, second) => {
        if (first.title > second.title){
            return 1;
        } else if (first.title < second.title) {
            return -1;
          } else  {
              return 0; 
        }
    })
    alphabsortedArray = alphabsortedArray.map(eachMovie => eachMovie.title)
    alphabsortedArray = alphabsortedArray.slice(0, 20)
return alphabsortedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
