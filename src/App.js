import React from 'react'
import './App.css'
import ListBooks from './Components/ListBooks';
import Book from './Components/Book'
import {Route, Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';


class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    showingBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    } )
  }

  //doesn't work correctly
  // updateQuery = (query) => {
  //       this.setState({query: query})
  //       let showingBooks = []
  //       if (query) {
  //         BooksAPI.search(query).then(response => {
  //           if (response.length) {
  //             showingBooks = response.map(b => {
  //               const index = this.state.books.findIndex(c => c.id === b.id)
  //              if( index >= 0 ) {
  //                 return this.state.books[index]
  //               } else {
  //                 return b
  //               }
  //             })
  //           }

  //           this.setState({showingBooks: showingBooks})
  //         })
  //       }
  //       else {
  //         this.setState({showingBooks: showingBooks})
  //       }
  //      }

    updateBookShelf = (book, e) => {
      const shelf = e.target.value
      if (book.shelf !== shelf) {
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf
          this.setState({
            showingBooks: this.state.books.filter(b => b.id !== book.id).concat([book])
          })
          BooksAPI.getAll().then((books) => {
            this.setState({books: books})
          } )
        })
      }
    } 

  updateQuery = (query) => {
    this.setState ({query: query})
  
    if (query) {
      BooksAPI.search(query).then(response => {

        if (response.length) {
      
        this.setState({ 
          showingBooks: response
        })

        }
      })
    }
  }

  
  //   updateQuery = (query) => {
  //   this.setState ({query: query})
  
  //   if (query) {
  //     const match = new RegExp(EscapeRegEx(query), 'i');
  //     let showingBooks = [];
  //     showingBooks = this.state.showingBooks.filter((book) => match.test(book.title + book.authors))
  //       this.setState({ 
  //         showingBooks: showingBooks
  //       })
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
                {showingBooks.map((book, index) => 
                  (
                    <li key={index}>
                      <Book book={book} onUpdateBookShelf={this.updateBookShelf}/>
                  </li> 
                  ))
                }
              </ol>
            </div>
          </div>
        )} />

      <Route exact path='/' render= {() => (
            <ListBooks books={books} 
                       onUpdateBookShelf={this.updateBookShelf}/>
      )} />

      </div>
    )
  }
}

export default BooksApp
