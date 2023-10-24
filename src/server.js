import { createServer } from 'node:http';
import { writeFile, readFile, unlink } from 'node:fs';


// const { add } = require('./utils/calculations');

const DATA = "tomorrow is the semi-final";

const hostname = "127.0.0.1";
const port = 4444;

const server = createServer((req, res) => {
    console.log('request URL', req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const url = req.url.replace('/', '');
    switch (url) {
        case 'file':
            writeFile('summary.txt', DATA, (err) => {
                if (err) {
                    throw err;
                }

                console.log('File is created successfully.');
            })
            res.end('File has just created.')
            break;
    
         case 'read':
            readFile('model.txt', (err, data) => {
                if (err) {
                    throw err;
                }

                res.end(data.toString('utf8'));
            })
            break;
        
        case 'file-delete':
            unlink('summary.txt', (err, data) => {
                if (err) {
                    throw err;
                }

                res.end('The file has removed correctly.');
            })
            break;
        
        default:
            res.end('Hey friend!');
            break;
    }
});


server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});
