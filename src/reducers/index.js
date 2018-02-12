import { combineReducers } from 'redux'
import tobooks from './tobooks'
import {reducer as form} from 'redux-form';

const BookApp = combineReducers({
  tobooks,
  form
})

export default BookApp
