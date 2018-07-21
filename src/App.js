import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './Components/ListBooks';
import {Route, Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import EscapeRegEx from 'escape-string-regexp';
import sortBy from 'sort-by';

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    showingBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    } )
  }

  updateQuery = (query) => {
        this.setState({query: query})
        let showingBooks = []
        if (query) {
          BooksAPI.search(query).then(response => {
            if (response.length) {
              showingBooks = response.map(b => {
                const index = this.state.books.findIndex(c => c.id === b.id)
               if( index >= 0 ) {
                  return this.state.books[index]
                } else {
                  return b
                }
              })
            }

            this.setState({showingBooks: showingBooks})
          })
        }
        else {
          this.setState({showingBooks: showingBooks})
        }
       }

  // updateQuery = (query) => {
  //   this.setState ({query: query})
  
  //   if (query) {
  //     BooksAPI.search(query).then(response => {

  //       if (response.length) {
      
  //       this.setState({ 
  //         showingBooks: response
  //       })

  //       }
  //     })
  //   }
  // }
  

  render() {

    //DESTRUCTURING
    const { query, showingBooks, books} = this.state;




    return (
      <div className="app">

      <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showingBooks.map((book) => 
                (
                  <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : '' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title ? book.title : ''}</div>
                    <div className="book-authors">{book.authors ? book.authors : ''}</div>
                  </div>
                </li> 
                )
              )
              }
            
              {console.log('Hello', books)}</ol>
            </div>
          </div>
        )} />

      <Route exact path='/' render= {() => (
            <ListBooks />
      )} />

      </div>
    )
  }
}

export default BooksApp
