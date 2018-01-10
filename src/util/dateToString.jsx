import dateFormat from 'dateformat';
import { Package } from 'react-feather';

const dateToString = (date) => {
  if (typeof date === 'undefined') {
    return '';
  }

  const dArray = date.split('-');
  const d = new Date(dArray[0], parseInt(dArray[1], 10) - 1, dArray[2]);
  return dateFormat(d, 'mmmm dS, yyyy');
};

export default dateToString;
