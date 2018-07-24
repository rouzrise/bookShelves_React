import React from 'react'
import './App.css'
import ListBooks from './Components/ListBooks';
import Search from './Components/Search';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';


class BooksApp extends React.Component {
  state = {
    books: []
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
        // this.setState({
        //   showingBooks: this.state.books.filter(b => b.id !== book.id).concat([book])
        // })
        BooksAPI.getAll().then((books) => {
          this.setState({books: books})
        } )
      })
    }
  } 

  render() {

    //DESTRUCTURING
    const { books} = this.state;

    return (
      <div className="app">

      <Route exact path='/search' render={() => (
      <Search updateBookShelf={this.updateBookShelf} 
              books={books}
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
