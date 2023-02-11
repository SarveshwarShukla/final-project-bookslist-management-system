import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const BookForm = () => {

  const [title, setTitle] = useState('TOC');
  const [author, setAuthor] = useState('Author');
  const [isbn, setIsbn] = useState(1);
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  const handleIsbnChange = (e) => {
    setIsbn(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setBook({
      title: title,
      author: author,
      isbn: isbn
    });
    setBooks([...books, book]);
  }

  return (
    <div className="bookContainer">
      <div className='bookform'>
        <form>
          <label htmlFor="title">
            Title:
            <input type="text" onChange={handleTitleChange} value={title} />
          </label>
          <label htmlFor="author">
            Author:
            <input type="text" onChange={handleAuthorChange} value={author} />
          </label>
          <label htmlFor="isbn">
            ISBN:
            <input type="number" onChange={handleIsbnChange} value={isbn} />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="bookdisplay">
        {books.length === 0 ?
          (<div> <p>No books are added yet</p> </div>) :
          <div>
            <div className='rowdef'>
              <span>ISBN#</span>
              <span>Title</span>
              <span>Author</span>
              <span>Delete</span>
            </div>
            {books.map((item, index) => {
              return (
                <div key={index} className="rowdef2">
                  <span>{item.isbn}</span>
                  <span>{item.title}</span>
                  <span>{item.author}</span>
                    <span className='delete-book' onClick={() => {
                      setBooks(books.filter((book) => book.isbn !== item.isbn))
                    }}>
                      <MdDelete />
                    </span>
                </div>
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default BookForm