import bcrypt from 'bcrypt';

import assert from 'node:assert'

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

const matched = await bcrypt.compare(myPlaintextPassword, hash);
const matchedAnotherPassword = await bcrypt.compare(someOtherPlaintextPassword, hash);

assert.equal(matched, true);
assert.notEqual(matchedAnotherPassword, true);
