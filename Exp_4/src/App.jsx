import React, { useState } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import SearchBar from "./SearchBar";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "1984", author: "George Orwell" },
  ]);
  const [search, setSearch] = useState("");
  const [editingBook, setEditingBook] = useState(null);

  // Add a new book
  const addBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  // Update a book
  const updateBook = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? book : b)));
    setEditingBook(null);
  };

  // Delete a book
  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  // Filtered books based on search
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <BookForm
        addBook={addBook}
        updateBook={updateBook}
        editingBook={editingBook}
      />
      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        setEditingBook={setEditingBook}
      />
    </div>
  );
}

export default App;
