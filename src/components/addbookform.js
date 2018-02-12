import React from 'react'
import { reduxForm } from 'redux-form'

const AddBookForm = ({addbook, fields: { name, author, publisher, price }, handleSubmit }) => {
  return (
    <form   className="AddBookForm-form" onSubmit={handleSubmit(addbook)}>
      <div>
        <label> Name</label>
        <div>
          <input  type="text" placeholder=" Name"  className="AddBookForm-form" {...name}/>
        </div>
      </div>

      <div>
        <label> Author </label>
        <div>
          <input   type="text" placeholder="author" className="AddBookForm-form" {...author}/>
        </div>
      </div>

      <div>
        <label> Publisher </label>
        <div>
          <input   type="text" placeholder=" publisher" className="AddBookForm-form" {...publisher}/>
        </div>
      </div>

      <div>
        <label> Price</label>
        <div>
          <input  type="number" placeholder="price "  className="AddBookForm-form"{...price} />
        </div>
      </div>
     
      <div>
        <button type="submit"  className="AddBookForm-form">Submit</button>
       
      </div>
    </form>
  )
}

export default reduxForm
({
    form:'book',
    fields:['name','author','publisher','price'],
})(AddBookForm)

