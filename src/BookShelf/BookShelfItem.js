import React from 'react'
import BookDetailButton from './BookDetailButton'
import iconDropDownGreen from '../Assets/Images/drop-down-arrow-green.png'
//import * as utils from '../../utils/Common'

class BookShelfItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shelfTitle: null
    }
  }

  getImageLink = (obj) => {
    //const imageList = utils.deepCopy(obj.imageLinks)
    //if (imageList !== null) {
    //  return (imageList.smallThumbnail)
    //}
  }

  inMyBookList = () => {
    // const myBooks = this.props.myBooks
    // const bookID = this.props.id
    // const isInMyShelf = myBooks.filter(e => e.id === bookID)
    // if (isInMyShelf.length > 0) {
    //   this.setState({shelfTitle: isInMyShelf[0].shelf})
    // }
  }

  componentDidMount() {
    // this.inMyBookList()
  }

  render() {    
    const book = this.props
    const bookID = this.props.id
    const coverStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${this.getImageLink(this.props)})`
    }

    return (
      <div className="book">
        <div style={{width: "min-content"}}>
          <div className="book-image-container" style={{display:"flex"}}>
              <img className="book-card-image" alt='book image' src={book}/>
          </div>
          <BookDetailButton/>
        </div>
      </div>
    )
  }
}

export default BookShelfItem
