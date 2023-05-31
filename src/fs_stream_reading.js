const fileSystem = require("fs");
var data = "";

const readStream = fileSystem.createReadStream("input.txt");

readStream.setEncoding("UTF8");

readStream.on("data", (chunk) => {
	data += chunk;
});

readStream.on("end", () => {
	console.log('stream: ', data);
});

readStream.on("error", (error) => {
	console.log(error.stack);
});


fileSystem.readFile("input.txt", 'utf8', (err, data) => {
	console.log('async: ', data);
});

const syncRead = fileSystem.readFileSync("input.txt", 'utf8');
console.log('sync: ', syncRead);
