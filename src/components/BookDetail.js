import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className="jumbotron"><h2>Select a book to get started</h2></div>;
    }
    return (
      <div className="BookDetail">
      <h2 className="text-center">{this.props.book.title}</h2>
        <div className="row">
          <div className="col-sm-4">
            <img src={this.props.book.cover} alt={this.props.book.title} className="img-responsive"/>
          </div>
          <div className="col-sm-8">
            <div className="col-sm-6"><div><b>Author:</b> {this.props.book.author}</div></div>
            <div className="col-sm-6"><div><b>Published:</b> {this.props.book.published}</div></div>
            <div className="col-sm-6"><div><b>Genre:</b> {this.props.book.genre}</div></div>
            <div className="col-sm-6"><div><b>Pages:</b> {this.props.book.pages}</div></div>
            <div className="col-sm-12"><div><b>Summary:</b> {this.props.book.summary}</div></div>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
