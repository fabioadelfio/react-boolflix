import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function FilterSelect() {
    const { movieGenres, selectedGenre, setSelectedGenre } = useContext(AppContext);

    const handleChange = (e) => {
        const genreId = parseInt(e.target.value);
        setSelectedGenre(genreId === 0 ? null : genreId);
    };

    return (
        <div className="genre-filter">
            {/* <label htmlFor="genre-select">Genere:</label> */}
            <select id="genre-select" onChange={handleChange}>
                <option value="0">Tutti</option>
                {movieGenres.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
        </div>
    );
}