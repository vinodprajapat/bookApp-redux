import React from 'react'
import { connect } from 'react-redux'
import { addbook} from '../actions'
import AddBookForm  from '../components/addbookform'
import { Field, reduxForm } from 'redux-form'

class AddBook extends React.Component{
    render(){
      return(
          <AddBookForm {...this.props} />
      )
    }

}
const mapDispatchToProps =(dispatch )=>({
    addbook: () => dispatch(addbook()),
});
    
export default connect(
    () => ({}),
    mapDispatchToProps,
  )(AddBook);
  
