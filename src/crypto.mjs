/*

https://www.openssl.org/
https://www.arcserve.com/blog/5-common-encryption-algorithms-and-unbreakables-future


*/

import { randomBytes, createCipheriv, createDecipheriv } from "crypto";
import assert from 'node:assert'

const CRYPTO_SECRET_KEY="vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"
const CRYPTO_ALGORITHM="aes-256-ctr"

const decrypt = hash => {
    const decipher = createDecipheriv(
        CRYPTO_ALGORITHM,
        CRYPTO_SECRET_KEY,
        Buffer.from(hash.iv, 'base64')
    );
    const decrypted = Buffer.concat([
        decipher.update(Buffer.from(hash.content, 'base64')),
        decipher.final()
    ]);

    return decrypted.toString();
}

const encrypt = string => {
    const iv = randomBytes(16);
    const cipher = createCipheriv(
        CRYPTO_ALGORITHM,
        Buffer.from(CRYPTO_SECRET_KEY),
        iv
    );

    const encrypted = cipher.update(string);
    const content = Buffer.concat([encrypted, cipher.final()]);

    return {
        iv: iv.toString('base64'),
        content: content.toString('base64')
    };
}


const text = 'developer';
const encrypted = encrypt(text);

console.log(`There any error?: ${!!assert.equal(decrypt(encrypted), text)}`)

