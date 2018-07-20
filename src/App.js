import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './Components/ListBooks';
import {Route, Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
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
            this.setState({showingBooks})
          })
        }
        else {
          this.setState({showingBooks})
        }
       }

  render() {

    //DESTRUCTURING
    const { query, showingBooks} = this.state;

    //SORTING RESULTS ALPHABETICALLY
    // showingBooks.sort(sortBy('name'));

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
              {console.log('Hello', showingBooks)}</ol>
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
