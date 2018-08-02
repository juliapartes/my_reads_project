import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI.js'
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';


class BooksApp extends React.Component {
  state = {
      books: []
    }

  getBooks() {
    BooksAPI.getAll().then((books) => {
    this.setState({ books })
    })
  }

  componentDidMount() {
    this.getBooks()
    }

  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf);

    this.getBooks()
  }

  render() {
    return (
      <div className="app">

      {/*Page changing*/}

      <Route exact path='/' render={() => (
        <MainPage 
          books={this.state.books}
          shelfChanger={this.shelfChanger}
        />
        )} />

      <Route path='/search' render={() => (
        <SearchPage 
          shelfChanger={this.shelfChanger}
          books={this.state.books}
        />
        )} />

      </div>
    )
  }
}

export default BooksApp
