import React from 'react'
import './App.css'
import ListBooks from './Components/ListBooks'
import Search from './Components/Search'
import {Route, Switch} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Page404 from './Components/Page404.js'


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
        //NO NEED TO USE lines below
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

        <Switch>
          <Route exact path='/search' render={() => (
          <Search updateBookShelf={this.updateBookShelf} 
                  books={books}
                  />
          )} />

          <Route exact path='/bookShelves_React' render= {() => (
                <ListBooks books={books} 
                          updateBookShelf={this.updateBookShelf}/>
          )} />

          <Route render ={() => (
            <Page404 />
          )} />
        </Switch>

      </div>
    )
  }
}

export default BooksApp
