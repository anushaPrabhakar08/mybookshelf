import React from 'react';
import '../App.css'
//import * as BooksAPI from '../../utils/BooksAPI'

class BookDetailButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  componentDidMount = () => {
    //this.setState({value: this.props.book.shelf})
  }

  handleChange = (event) => {
    console.log("alert !!!!!!!!!!!!!!!!")
    this.setState({value: event.target.value}, () => {
      this.moveToBookShelf()
    })
  }

  moveToBookShelf = () => {
    const book = this.props.book
    const title = this.state.value
  // BooksAPI.update(book, title).then(() => {
     // this.props.updateShelf(title)
   // })
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value || this.props.shelf || ''} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookDetailButton