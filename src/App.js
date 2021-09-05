import React, { Component, Fragment} from 'react';
import './App.css';
import BooksList from './components/BooksList';
import Search from './components/Search';
import * as data from './services/OpenLibraryData';

class App extends Component {
  state = { books: [], isFetching: false, query: '', numFound: 0 };

  onSearch = async e => {
    e.preventDefault();
    this.setState({ isFetching: true, books: []});
    const result = await data.findBooks(this.state.query);
    const { docs = [], numFound = 0 } = result;
    this.setState({ books: docs, isFetching: false, numFound });
  };

  onQueryChange = ({ target: { value } }) => {
    this.setState({ query: value });
   };

   render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">
              OPENLIBRARY API BOOKS
            </h1>
          </div>
        </section>
        <Search
          onQueryChange={this.onQueryChange}
          onSearch={this.onSearch}
          query={this.state.query}
        />
          <BooksList 
          loading={this.state.isFetching}
          books={this.state.books}
          count={this.state.numFound}
    
        />

      </Fragment>
    );
  }
}

export default App;
