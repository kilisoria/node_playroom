const cache = require('memory-cache');

function getDataFromDatabase(key) {
    console.log('checking!');
    const data = [1, 2, 3, 4, 5, 6]; // fetch data from database
    cache.put(key, data, 60 * 1000); // cache for 1 minute
  
    return data;
}

function getData(key) {
    let data = cache.get(key);
    if (!data) {
        data = getDataFromDatabase(key);
    }

    return data;
}

console.log(getData('TEST'));
console.log(getData('TEST'));
console.log(getData('TEST'));

setTimeout(() => {
    console.log(getData('TEST'));
    console.log(getData('TEST'));
}, (60 * 1001))
