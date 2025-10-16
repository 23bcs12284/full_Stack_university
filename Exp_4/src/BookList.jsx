import React from "react";
import BookItem from "./BookItem";

function BookList({ books, deleteBook, setEditingBook }) {
  if (books.length === 0) return <p>No books found</p>;

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          setEditingBook={setEditingBook}
        />
      ))}
    </ul>
  );
}

export default BookList;
