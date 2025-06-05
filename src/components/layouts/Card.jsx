export default function Card({ movie }) {
  return (
    <div className="card" key={movie.id}>
        <div className="card-content">
            <div className="movie-title">{movie.title}</div>
            <p><strong>Titolo originale:</strong> {movie.original_title}</p>
            <p><strong>Lingua:</strong> {movie.original_language}</p>
            <p><strong>Voto:</strong> {movie.vote_average}</p>
        </div>
    </div>
  );
}