import os from 'node:os'

console.log(`OS information: ${os.platform}`)
console.log(`OS: ${os.availableParallelism()}`)
console.log(`OS: ${os.machine}`)
console.log(`OS: ${os.hostname}`)
console.log(`OS: ${os.freemem}`)
console.log(`OS: ${os.userInfo().username}`)
