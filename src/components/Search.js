const Search = ({ query, onQueryChange, onSearch }) => {
    return (
      <section className="section_search">
        <div className="container_search">
          <form onSubmit={onSearch}>
            <div className="field_container">
              <div className="control_expanded">
                <input
                  className="input_medium"
                  type="text"
                  placeholder="Enter the Title Book" style={{fontFamily: 'Helvetica'}}
                  defaultValue={query}
                  onChange={onQueryChange}
                  required
                />
              </div>
              <div className="control">
                <button type="submit" className="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default Search;