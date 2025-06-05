import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Card from './Card';

export default function ResultSection() {
  const { movies } = useContext(AppContext);

  return (
    <div className='cards-list'>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))
      ) : (
        <p>Nessun risultato trovato.</p>
      )}
    </div>
  );
};