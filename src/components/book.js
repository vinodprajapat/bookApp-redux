import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ onClick,  book }) => (
  <li
    //onClick={onClick}
 >
    {book}
  </li>
)

// Book.propTypes = {
//  // onClick: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Book
