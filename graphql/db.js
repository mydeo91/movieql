let movies = [
  {
    id: 0,
    name: "스타워즈",
    score: 0.1
  },
  {
    id: 1,
    name: "어벤저스",
    score: 8
  },
  {
    id: 2,
    name: "갓파더",
    score: 99
  },
  {
    id: 3,
    name: "로건",
    score: 2
  }
];

// select * from movies
export const getMovies = () => movies;

// select id from movies
export const getById = id => {
  const filteredMovies = movies.filter(movies => movies.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movies.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
      return false;
  }
};


export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;

}