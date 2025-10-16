import React from "react";

function BookItem({ book, deleteBook, setEditingBook }) {
  return (
    <li>
      <span>
        {book.title} by {book.author}
      </span>
      <button onClick={() => setEditingBook(book)}>Edit</button>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
