const http = require('http');
const fs = require('fs');


const { add } = require('./utils/calculations');

const DATA = "tomorrow is the semi-final";

const hostname = "127.0.0.1";
const port = 4444;

const server = http.createServer((req, res) => {
    // console.log(add(10, 20));
    console.log('rrr', req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const url = req.url.replace('/', '');
    switch (url) {
        case 'file':
            fs.writeFile('summary.txt', DATA, (err) => {
                if (err) {
                    throw err;
                }

                console.log('File is created successfully.');
            })
            res.end('File has just created.')
            break;
    
         case 'read':
            fs.readFile('model.txt', (err, data) => {
                if (err) {
                    throw err;
                }

                res.end(data.toString('utf8'));
            })
            break;
        
        case 'file-delete':
            fs.unlink('summary.txt', (err, data) => {
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
