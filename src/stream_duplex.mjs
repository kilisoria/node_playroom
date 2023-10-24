import { PassThrough } from 'stream'
import chalk from 'chalk';

import { createReadStream, createWriteStream }  from "node:fs"; 

const readStream = createReadStream("./long-test.txt"); // read data from this file
const writeStream = createWriteStream("./copy.txt"); 

const tunnel = new PassThrough()

tunnel.on("data", (chunk) => {
  // console.log("bytes:", chunk); // bytes: <Buffer 23 20 4a 61 76 61 53 63 72 69 70 74 20 41 6c 67 6f 72 69 74 68 6d 73 20 61 6e 64 20 44 61 74 61 20 53 74 72 75 63 74 75 72 65 73 0a 0a 54 68 69 73 20 ... 1767 more bytes>
    console.log(`${chalk.bgBlackBright("String")}: ${chunk}`)
});

readStream.pipe(tunnel).pipe(writeStream);
