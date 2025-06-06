import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function SearchBar() {
    const [inputValue, setInputValue] = useState(``);
    const { setQuery } = useContext(AppContext);

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            setQuery(inputValue);
        }
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Cerca..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            <button onClick={handleSearch}>Cerca</button>
        </div>
    );
}   