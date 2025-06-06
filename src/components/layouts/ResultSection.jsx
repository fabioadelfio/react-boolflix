import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import {MovieCard} from './Card';
import {SerieCard} from './Card';

export default function ResultSection() {
  const { movies, series } = useContext(AppContext);

  const { selectedGenre } = useContext(AppContext);

    const filteredMovies = selectedGenre
        ? movies.filter(movie => movie.genre_ids.includes(selectedGenre))
        : movies;

    const filteredSeries = selectedGenre
    ? series.filter(serie => serie.genre_ids.includes(selectedGenre))
    : series;

  return (
    <>
        <h1>FILMS</h1>
        <div className='cards-list'>
            {movies.length > 0 ? (
                filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))
            ) : (
                <p>Nessun risultato trovato.</p>
            )}
        </div>

        <h1>SERIES</h1>
        <div className='cards-list'>
            {series.length > 0 ? (
                filteredSeries.map(serie => (
                <MovieCard key={serie.id} movie={serie} />
            ))
            ) : (
                <p>Nessun risultato trovato.</p>
            )}
        </div>
    </>
  );
};