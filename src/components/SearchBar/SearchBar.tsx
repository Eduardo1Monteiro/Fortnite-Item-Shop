import "./SearchBar.css";


function SearchBar(props:{ placeholderText: string }) {
  return (
    <div className="searchBarContainer">
      <input className="searchBar" type="text" placeholder={props.placeholderText} />
      <button className="searchBarButton">
        <img src="/magnifying_glass_transparent.png" alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
