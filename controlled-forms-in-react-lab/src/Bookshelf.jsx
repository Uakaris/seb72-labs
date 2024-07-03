import './index.css';
import { useState } from 'react';

const bookShelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, { title: newBook.title, author: newBook.author }]);
        setNewBook({title: '', author: ''});
    }

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={ handleSubmit }>
            <label>Title:</label>
                <input
                    type='text'
                    name='title'
                    value={ newBook.title }
                    onChange={ handleInputChange }
                    required
                />
            <label>Author:</label>
                <input
                    type='text'
                    name='author'
                    value={ newBook.author }
                    onChange={ handleInputChange }
                    required
                />
            <button type='submit'>Add Book</button>
        </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index} className='bookCard'>
                    <h4>{ book.title }</h4>
                    <p>{ book.author }</p>
                </div>
            ))}

        </div>
        </div>
    )
}

export default bookShelf;


