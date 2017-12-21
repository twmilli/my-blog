import dateFormat from 'dateformat';

const dateToString = (date) => {
    if (isNaN(date)) {
        return "";
    }
    const dArray = date.split('-');
    const d = new Date(dArray[0], parseInt(dArray[1])-1, dArray[2]);

    return dateFormat(d, "mmmm dS, yyyy");
}

export default dateToString;
