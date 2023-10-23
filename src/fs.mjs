import fs from 'node:fs'

const stats = fs.statSync('./input.txt')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.size
)

// SYNC
const readable1 = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
console.log('sync: ', readable1)

// ASYNC
fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => console.log('async: ' + data))
