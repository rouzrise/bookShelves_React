import React from 'react'
import Book from './Book'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Search extends React.Component {

  render() {

    //DESTRUCTURING
    const { query, showingBooks, updateQuery, updateBookShelf } = this.props;

    return (
          <div className="search-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => updateQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((book, index) => 
                  (
                    <li key={index}>
                      <Book book={book} updateBookShelf={updateBookShelf}/>
                  </li> 
                  ))
                }
              </ol>
            </div>
          </div>
    )
}
}

Book.propTypes = {
  query: PropTypes.string,
  showingBooks: PropTypes.array,
  updateQuery: PropTypes.func,
  updateBookShelf: PropTypes.func
}

export default Search
