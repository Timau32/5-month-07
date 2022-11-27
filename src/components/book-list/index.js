import React, { useEffect } from "react";
import { connect } from "react-redux";

import { BookListItem, WithService } from "../";
import { booksLoaded } from "../../redux-act";

import "./styles.module.scss";

const BookList = ({ books, storeService }) => {
  useEffect(() => {
    storeService.getBooks().then((data) => console.log(data));
  }, []);

  console.log(typeof WithService);

  return (
    <ul>
      {books.map((el) => (
        <li key={`book-${el.id}`}>
          <BookListItem book={el} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch(booksLoaded(books)),
  };
};

const HocBooklist = WithService(BookList);

export default HocBooklist;
