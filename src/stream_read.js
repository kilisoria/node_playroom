const fileSystem = require("fs");
const Stream = require('stream');
const { Readable } = require('stream');

let data = "";

const readStream = fileSystem.createReadStream("input.txt", { encoding: "utf8" });

readStream.on("data", (chunk) => {
	data += chunk;
});

readStream.on("end", () => {
	console.log(`result for reading data using fileSystem: ${data}`);
});

readStream.on("error", (error) => {
	console.log(error.stack);
});

readStream.on("close", () => {
	console.log("close for reading data using fileSystem");
});	

console.log('10/2023: ============================')

const readableStream = new Stream.Readable();
readableStream.push('Helo')
readableStream.push('bye bye')
let need = ''

readableStream.on('data', chunk => need += chunk)
readableStream.on('end', () => console.log(`'result by push: ${need}`))
readableStream.on('error', () => console.log('There was something wrong.'))

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log('result for "fileSystem.createReadStream": ' + chunk);
  }
}

const str2 = fileSystem.createReadStream("test.txt", { encoding: 'utf-8' })
logChunks(str2)

const readableToString = async (readable) => {
	let result = '';

	for await (const chunk of readable) {
		console.log('result for Readable: ' + chunk);
	}

	return result
}

const str3 = Readable.from('123456789 ABCDEFGHI', { encoding: 'utf-8' })
readableToString(str3);


var readableStream2 = fileSystem.createReadStream('test.txt');
var data2 = '';
var chunk;

readableStream2.on('readable', function() {
    while ((chunk=readableStream2.read()) != null) {
        data2 += chunk;
    }
});

readableStream2.on('end', function() {
	console.log(`result for reading with pause mode. ${data2}`);
});