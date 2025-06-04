import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import MovieDescription from './MovieDescription';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      detailedDescription:
        'Dom Cobb is a professional thief who steals secrets through dreams. This psychological sci-fi journey explores layers of reality and identity.',
      posterURL: inceptionPoster,
      rating: 8.8,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'Breaking Bad',
      description: 'A chemistry teacher becomes a drug kingpin.',
      detailedDescription:
        'Walter White, a high school chemistry teacher, turns to a life of crime after a terminal cancer diagnosis. An iconic transformation unfolds.',
      posterURL: breakingBadPoster,
      rating: 9.5,
      trailer: 'https://www.youtube.com/embed/HhesaQXLuRY',
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    const movieWithId = { ...newMovie, id: movies.length + 1 };
    setMovies([...movies, movieWithId]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <div>
        <h1>🎬 My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setTitle={setFilterTitle} setRating={setFilterRating} />
                <AddMovie onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
