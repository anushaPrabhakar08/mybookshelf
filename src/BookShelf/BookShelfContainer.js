import React from 'react'
import BookShelfItem from './BookShelfItem'

class BookShelfContainer extends React.Component {

  render() {
    const BookList = {...this.props.bookList}
    const { myBooks, title: ShelfTitle } = this.props
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ShelfTitle}</h2>
        <div className="bookshelf-books">
         <BookShelfItem/>
        </div>
      </div>
    )
  }
}

export default BookShelfContainer