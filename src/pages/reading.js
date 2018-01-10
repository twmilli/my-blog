import React from 'react';
import dateFormat from 'dateformat';

import books from './books.json';
import './reading.scss';

function toDateString(dateStr) {
  const parts = dateStr.split('-');
  return dateFormat(new Date(parts[1], parts[0] - 1), 'mmm, yyyy');
}

const Reading = () => {
  const { read, reading, to_read } = books;
  const read_component = read.map(book => (
    <li className="read-book" key={book.link}>
      <a href={book.link} target="_blank">{book.title}</a>
            &nbsp; by {book.author} &nbsp; ({toDateString(book.date)})
    </li>
  ));

  const reading_component = reading.map(book => (
    <li className="read-book" key={book.link}>
      <a href={book.link} target="_blank">{book.title}</a>
            &nbsp; by {book.author}
    </li>
  ));

  const to_read_component = to_read.map(book => (
    <li className="read-book" key={book.link}>
      <a href={book.link} target="_blank">{book.title}</a>
            &nbsp; by {book.author}
    </li>
  ));

  return (
    <div className="reading-page-container">
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
};

export default Reading;
