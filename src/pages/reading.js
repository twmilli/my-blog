import React from 'react';
import dateFormat from 'dateformat';

import books from './books.json';
import './reading.scss';

function toDateString(dateStr) {
  const parts = dateStr.split('-');
  return dateFormat(new Date(parts[1], parts[0] - 1), 'mmm, yyyy');
}

const compare = (a, b) => {
  if (a.rating > b.rating) {
    return -1;
  } else if (a.rating < b.rating) {
    return 1;
  }
  return 0;
};

const Reading = () => {
  const { read } = books;
  const read_component = read.sort(compare).map(book => (
    <li className="read-book" key={book.link}>
      <a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a>
            &nbsp; by {book.author} &nbsp; [{book.rating}/10] &nbsp; ({toDateString(book.date)})
    </li>
  ));

  return (
    <div className="reading-page-container">
      <h1>Reading</h1>
      <a className="goodreads-link" href="https://www.goodreads.com/review/list/68049286-taylor?shelf=to-read" target="_blank" rel="noopener noreferrer">To Read.</a>
      <br />
      <a className="goodreads-link" target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/review/list/68049286-taylor?shelf=currently-reading">Currently Reading.</a>
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
