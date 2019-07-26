import React from 'react';
import {Link} from 'react-router-dom'
import BookShelfContainer from '../BookShelf/BookShelfContainer'
import plusIcon from '../Assets/Images/plus-icon.png'

class MyBookList extends React.Component {

  render() {
    const props = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MY READS</h1>
        </div>
        <div id="list-books-content">
          <BookShelfContainer myBooks={props.myBooks}
                              updateShelf={props.initShelves}
                              bookList={props.currentlyReading}
                              title="Currently Reading"/>
         <BookShelfContainer myBooks={props.myBooks}
                              updateShelf={props.initShelves}
                              bookList={props.wantToRead}
                              title="Want To Read"/>
          <BookShelfContainer myBooks={props.myBooks}
                              updateShelf={props.initShelves}
                              bookList={props.read}
                              title="Read Done"/> 
        </div>
        <div className="open-search">
          <Link
            to='/search'
          ><img className="plus-icon"src={plusIcon}/></Link>
        </div>
      </div>
    )
  }
}

export default MyBookList
