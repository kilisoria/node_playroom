const fileSystem = require("fs");

fileSystem.readFile("input.txt", 'utf8', (err, data) => {
	console.log('async: ', data);
});

const syncRead = fileSystem.readFileSync("input.txt", 'utf8');
console.log('sync: ', syncRead);
