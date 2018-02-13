import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VisibleBookList from '../containers/viewbooks'
import AddBook from '../containers/addbook'
import Home from '../home/home'
import './app.css'
const App = () => (
  <div>
      <Router>
            <div>
               <h2 className="App"> Welcome to  Book Store </h2>
               <ul>
                  <li><Link to={'/'} >Home</Link></li>
                  <li><Link to={'/books'} > Books</Link></li>
               </ul>
               <hr />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/books' component={VisibleBookList} />
                  <Route exact path='/addbook' component={AddBook} />
                 
               </Switch>
            </div>
         </Router>
  </div>
)

export default App
