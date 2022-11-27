
export const booksLoaded = (books) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: books,
  };
};
