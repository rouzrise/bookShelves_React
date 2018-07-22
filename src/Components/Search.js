import React from 'react'
import Book from './Book'
import {Link} from 'react-router-dom';

class Search extends React.Component {

  render() {

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
                        value={this.props.query}
                        onChange={(e) => this.props.onUpdateQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.props.showingBooks.map((book, index) => 
                  (
                    <li key={index}>
                      <Book book={book} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                  </li> 
                  ))
                }
              </ol>
            </div>
          </div>
    )
}
}

export default Search
