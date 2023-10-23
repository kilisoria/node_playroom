import fs from 'node:fs/promises'
import chalk from 'chalk'

// ASYNC SECUENTIAL
fs.readFile('./input.txt', { encoding: 'utf-8' }).then(r => console.log(`${chalk.red('Async secuential 1:')}: ${r}`))
fs.readFile('./input2.txt', { encoding: 'utf-8' }).then(r => console.log(`${chalk.red('Async secuential 2:')}: ${r}`))

// ASYNC/ AWAIT
const result1 = await fs.readFile('./input.txt', { encoding: 'utf-8' })
console.log(`${chalk.yellowBright('Async secuential using await:')}: ${result1}`)


// ASYNC PARALLEL
Promise.all([
    fs.readFile('./input.txt', { encoding: 'utf-8' }),
    fs.readFile('./input2.txt', { encoding: 'utf-8' })
]).then(([file1, file2]) => {
    console.log(`${chalk.greenBright("Async Parallel 1:")} ${file1}`)
    console.log(`${chalk.greenBright("Async Parallel 2:")} ${file2}`)
})

// DIRECTORY
try {
    const dir = await fs.readdir('./')
    
    console.log(`${chalk.greenBright("Directory:")}`)
    dir.forEach(d => {
         console.log(`${chalk.green(d)}`)
    })

} catch (error) {
    
}
