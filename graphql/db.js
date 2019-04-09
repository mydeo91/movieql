let movies = [
  {
    id: 1,
    name: "스타워즈",
    score: 0.1
  },
  {
    id: 2,
    name: "어벤저스",
    score: 8
  },
  {
    id: 3,
    name: "갓파더",
    score: 99
  },
  {
    id: 4,
    name: "로건",
    score: 2
  }
];

// select * from movies
export const getMovies = () => movies;

// select id from movies
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

// INSERT
export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;

}

// DELETE
export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
      movies = cleanedMovies;
      return true;
    } else {
        return false;
    }
  };