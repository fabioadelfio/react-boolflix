import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import {MovieCard} from './Card';
import {SerieCard} from './Card';

export default function ResultSection() {
  const { movies, series } = useContext(AppContext);

  return (
    <>
        <h1>FILMS</h1>
        <div className='cards-list'>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            ) : (
                <p>Nessun risultato trovato.</p>
            )}
        </div>

        <h1>SERIES</h1>
        <div className='cards-list'>
            {series.length > 0 ? (
                series.map((serie) => (
                    <SerieCard key={serie.id} serie={serie} />
                ))
            ) : (
                <p>Nessun risultato trovato.</p>
            )}
        </div>
    </>
  );
};