import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item"
          onClick={() => this.props.selectBook(book)}
          key={book.title}>{book.title}</li>
      );
    })
  }
  render() {
    return (
      <div className="BookList">
        <h2 className="text-center">Book Shelf</h2>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
