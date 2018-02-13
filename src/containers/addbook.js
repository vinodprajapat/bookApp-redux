import React from 'react'
import { addbook} from '../actions'
import './form.css'
import { connect } from 'react-redux'
import {reduxForm } from 'redux-form'
import { Redirect } from 'react-router'

class AddBook extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        book:{
            id:1,
            name:"",
            author:"",
            publisher:"",
            price:0
        },
        newpage:false
    };

    this.handleName = this.handleName.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handlePublisher = this.handlePublisher.bind(this);
    this.handlePrice = this.handlePrice.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    let book = Object.assign({}, this.state.book);    //creating copy of object
    book.name = event.target.value;                        //updating value
    this.setState({book});
}

 handleAuthor(event) {
   let book = Object.assign({}, this.state.book);    //creating copy of object
    book.author = event.target.value;                        //updating value
    this.setState({book});
  }
  
    handlePublisher(event) {
    let book = Object.assign({}, this.state.book);    //creating copy of object
    book.publisher = event.target.value;                        //updating value
    this.setState({book});
}

  handlePrice(event) {
    let book = Object.assign({}, this.state.book);    //creating copy of object
    book.price = event.target.value;                        //updating value
    this.setState({book});
}


  handleSubmit(event,dispatch) {

 this.props.addbook(this.state.book);
 this.setState({ newpage: true})
  event.preventDefault();
  }
   

  render() {
      if (this.state.newpage) {
     return (
     <Redirect to="/books"/>
     )
   }

    return (
      <div>
        <h2> Add Book Details  </h2>
         
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
        </label>
          <input type="text" value={this.state.name} onChange={this.handleName}  required />
         <br />
         
         <label>
           Author:
           </label>
          <input type="text" value={this.state.author } onChange={this.handleAuthor} required />
           <br />

          <label>
           Publisher:
           </label>
          <input type="text" value={this.state.publisher } onChange={this.handlePublisher} required  />
          <br />

         <label>
           Price:
           </label>
          <input type="number" value={this.state.price } onChange={this.handlePrice} required />
          <br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

// const mapDispatchToProps =(dispatch )=>({
//     addbook: () => dispatch(addbook(this.state.book)),
// });

export default reduxForm({
    form:"addbookform"
})(connect(null,{addbook})(AddBook));

// export default AddBook;
  
