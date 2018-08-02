import React, { Component } from 'react';
import Book from './Book.js';

/*The Book Shelf component*/

class BookShelf extends Component {
	render() {
    const { title, books, shelf, shelfChanger } = this.props 

		return (
      <div className="bookshelf">
       <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.filter(book => book.shelf === shelf)
              .map(book => (
              <li key={book.id}>
                <Book 
                  book={book}
                  shelfChanger={shelfChanger}
                  shelf={shelf}
                />
              </li>
              ))
            }
          </ol>
        </div>
      </div>
		);
	}
}

export default BookShelf;