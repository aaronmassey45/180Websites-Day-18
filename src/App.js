import React, { Component } from 'react';
import Navbar from './navbar';
import BookList from './components/bookList';
import BookDetail from './components/BookDetail';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Navbar />
          <div className="container">
           <div className="row">
            <div className="col-sm-4 bookshelf">
              <BookList />
            </div>
            <div className="col-sm-8 bookdetail">
              <BookDetail />
            </div>
           </div>
          </div>
        </div>
      </Provider>
    );
  }
}
