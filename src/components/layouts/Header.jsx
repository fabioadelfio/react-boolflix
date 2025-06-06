import FilterSelect from "../Filters/FilterSelect";
import SearchBar from "../Filters/SearchBar";

export default function Header() {
  return (
    <header>
      <div id="page-header">
        <div className="title-header">BOOLFLIX</div>
        <div className="filters">
          <FilterSelect /> 
          <SearchBar />
        </div>
      </div>
    </header>
  );
}