export const SearchComponent = () => {
  return (
    <div className="SearchComponent">
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="Search a restaurant you want...."
        />
        <button>Search</button>
      </div>
    </div>
  );
};
export default SearchComponent;
