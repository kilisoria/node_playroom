const dgram = require('dgram');
const s = dgram.createSocket('udp4');

s.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg.toString());
});
s.bind(8080);

s.send(Buffer.from('A developer hight qualify'), 8080, 'localhost');