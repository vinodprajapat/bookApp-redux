import { connect } from 'react-redux'
import { deletebook } from '../actions'
import BookList from '../components/bookslist'

const getVisibleBooks = (books) => {
return books;
}

const mapStateToProps = (state) => ({

  books: getVisibleBooks(state.tobooks)
})

const mapDispatchToProps = {
 onDeleteBookClick:deletebook
}

const VisibleBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default VisibleBookList
