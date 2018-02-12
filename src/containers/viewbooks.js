import { connect } from 'react-redux'
import { deletebook } from '../actions'
import BookList from '../components/bookslist'

const getVisibleBooks = (books) => {
  // switch (filter) {
  //   case 'SHOW_ALL':
  //     return todos
  //   case 'SHOW_COMPLETED':
  //     return todos.filter(t => t.completed)
  //   case 'SHOW_ACTIVE':
  //     return todos.filter(t => !t.completed)
  //   default:
  //     throw new Error('Unknown filter: ' + filter)
  
//  }
return books;
}

const mapStateToProps = (state) => ({

  books: getVisibleBooks(state.tobooks)
})

const mapDispatchToProps = {
//   onAddBookClick: Addbook,
//   onEditBookClick:Editbook,
//   onDeleteBookClick:DeleteBook
}

const VisibleBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default VisibleBookList
