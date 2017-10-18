var fs = require('fs');
var NodeRSA = require('node-rsa');


console.log('=========================');

var keya = new NodeRSA({b:1024});
var keyb = new NodeRSA({b:1024});

console.log('=========================');
var text = 'Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{*Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{*';
var encrypted = keya.encrypt(text, 'base64');
console.log('encrypted a: ', encrypted);
console.log('=========================');
var encrypted = keyb.encrypt(encrypted, 'base64');
console.log('encrypted b: ', encrypted);
console.log('=========================');


var decrypted = keyb.decrypt(encrypted, 'utf8');
console.log('decrypted b: ', decrypted);
console.log('=========================');
var decrypted = keya.decrypt(decrypted, 'utf8');
console.log('decrypted a: ', decrypted);
console.log('=========================');

