import React from 'react'
import './App.css'
import ListBooks from './Components/ListBooks';
import Search from './Components/Search';
import {Route} from 'react-router-dom';
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

  updateBookShelf = (book, e) => {
    const shelf = e.target.value
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        book.rating = 1
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

  render() {

    //DESTRUCTURING
    const { query, showingBooks, books} = this.state;

    return (
      <div className="app">

      <Route exact path='/search' render={() => (
      <Search query={query} 
              updateQuery={this.updateQuery} 
              updateBookShelf={this.updateBookShelf} 
              showingBooks={showingBooks}
              />
      )} />

      <Route exact path='/' render= {() => (
            <ListBooks books={books} 
                       updateBookShelf={this.updateBookShelf}/>
      )} />

      </div>
    )
  }
}

export default BooksApp
