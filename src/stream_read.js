import fileSystem from "fs"

import Stream from 'stream'

import { Readable } from 'stream'

import chalk from 'chalk';

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
	console.log("\x1b[35m", "close for reading data using fileSystem");
});	

console.log('10/2023: ============================')

// EXAMPLE 01
const readableStream = new Stream.Readable();
readableStream.push('Helo')
readableStream.push('bye bye')
let need = ''

readableStream.on('data', chunk => need += chunk)
readableStream.on('end', () => console.log(`'result by push: ${need}`))
readableStream.on('error', () => console.log('There was something wrong.'))

// EXAMPLE 02
async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log('result for "fileSystem.createReadStream": ' + chunk);
  }
}

const str2 = fileSystem.createReadStream("test.txt", { encoding: 'utf-8' })
logChunks(str2)

// EXAMPLE 03
const readableToString = async (readable) => {
	for await (const chunk of readable) {
		console.log('\x1b[36m%s\x1b[0m' ,'result for Readable: ' + chunk);
	}
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
	console.log(`${chalk.red("result for reading with pause mode:")} ${data2}`);
});