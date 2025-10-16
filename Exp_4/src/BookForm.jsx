import React, { useState, useEffect } from "react";

function BookForm({ addBook, updateBook, editingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
    } else {
      setTitle("");
      setAuthor("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const book = editingBook
      ? { id: editingBook.id, title, author }
      : { title, author };

    editingBook ? updateBook(book) : addBook(book);

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">{editingBook ? "Update" : "Add"} Book</button>
    </form>
  );
}

export default BookForm;
