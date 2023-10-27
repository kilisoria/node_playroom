import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', values => console.log(`start: event. Values: ${values?.name}`))
eventEmitter.on('deferred', () => {
    setImmediate(() => {
        console.log('setImmediate')
    })
})

eventEmitter.on('second_deferred', () => {
    process.nextTick(() => console.log('nextTick'))
})

eventEmitter.on('multiple-start', () => console.log('listener 01'))
eventEmitter.on('multiple-start', () => console.log('listener 09'))
eventEmitter.on('multiple-start', () => console.log('listener 22'))

eventEmitter.on('error', () => console.log("Something was wrong :/"))

console.log('listener count:' + eventEmitter.listenerCount('start'))

eventEmitter.once('start', () => {
    console.log('At least!')
})

eventEmitter.emit('start', { name: 'fox' })
eventEmitter.emit('deferred')
eventEmitter.emit('second_deferre')
eventEmitter.emit('start', { name: 'peter' })
eventEmitter.emit('start', { name: 'chris' })

console.log(eventEmitter.listeners('multiple-start').length)

eventEmitter.emit('multiple-start')

console.log('event names', eventEmitter.eventNames())
eventEmitter.removeAllListeners('deferred2')
console.log('event names post listener removed', eventEmitter.eventNames())

eventEmitter.addListener('just-added', () => console.log('just-added'))
console.log('event names post listener added', eventEmitter.eventNames())

eventEmitter.prependListener('at-top', () => console.log('at top'))
console.log('event names post prependListener', eventEmitter.eventNames())

