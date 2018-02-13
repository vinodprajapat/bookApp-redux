import React from 'react'
import PropTypes from 'prop-types'
import './book.css'
import {  Link } from 'react-router-dom';


const BookList = ({ books,  onDeleteBookClick}) => (
    <table id="books">
    <tbody>
  <tr>
  <th>  Name </th>
  <th>  Author </th>
  <th>  Publisher </th>
  <th>  Price </th>
  </tr>
    
    {books.map((book,i) =>
      <tr>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
        <td>{book.price }</td>     
        <td> <a class="btn btn-xs btn-danger" onClick={() => onDeleteBookClick(book.id)} > Delete </a> </td>
       </tr>
       )}
 </tbody>
 
 <a class="btn btn-xs btn-sucess"><Link to={'/addbook'} > Add Book</Link></a>
  </table>  
   
)

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
   onDeleteBookClick: PropTypes.func.isRequired
}

export default BookList
