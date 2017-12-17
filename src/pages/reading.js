import React from 'react';
import books from './books.json';
import './reading.scss';

const Reading = () => {
    const { read, reading, to_read } = books;
    const read_component = read.map((book) => (
        <li className="read-book">
            <a href={book.link}>{book.title}</a>
            &nbsp; by {book.author} &nbsp; ({book.date})
        </li>
    ));

    const reading_component = reading.map((book) => (
        <li className="read-book">
            <a href={book.link}>{book.title}</a>
            &nbsp; by {book.author}
        </li>
    ));

    const to_read_component = to_read.map((book) => (
        <li className="read-book">
            <a href={book.link}>{book.title}</a>
            &nbsp; by {book.author}
        </li>
    ));

    return(
        <div className='reading-page-container'>
        <h1>Reading</h1>
            <div className="to-read-container">
                <span>On my list to read: </span>
                <ul>
                    {to_read_component}
                </ul>
            </div>

            <div className="reading-container">
                <span>Currently Reading: </span>
                <ul>
                    {reading_component}
                </ul>
            </div>
            <div className="read-container">
                <span>Books I have read in recent memory (estimated dates): </span>
                <ul>
                    {read_component}
                </ul>
            </div>
        </div>
    );
}

export default Reading;