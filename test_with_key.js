
var fs = require('fs');
var NodeRSA = require('node-rsa');


var private_a = fs.readFileSync('./keys/privkey_a.pem', 'utf8');
var public_a = fs.readFileSync('./keys/pubkey_a.pem', 'utf8');

var private_b = fs.readFileSync('./keys/privkey_b.pem', 'utf8');
var public_b = fs.readFileSync('./keys/pubkey_b.pem', 'utf8');

console.log('=========================');

var keya = new NodeRSA(private_a,'pkcs1');
var keyb = new NodeRSA(private_b,'pkcs1');
var keya_p = new NodeRSA();
keya_p.importKey(public_a, 'pkcs8-public-pem');
var keyb_p = new NodeRSA();
keyb_p.importKey(public_b, 'pkcs8-public-pem');



console.log('=========================');
var text = 'Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{* Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{*Un testo molto lungo cerchiamo di capire cosa succede. Lorem ipsum ecc.. ec...c d3465753403{}{}{*';
var encrypted = keya.encryptPrivate(text, 'base64');
console.log('encrypted a: ', encrypted);
console.log('=========================');
var encrypted = keyb.encryptPrivate(encrypted, 'base64');
console.log('encrypted b: ', encrypted);
console.log('=========================');


var decrypted = keyb_p.decryptPublic(encrypted, 'utf8');
console.log('decrypted b: ', decrypted);
console.log('=========================');
var decrypted = keya_p.decryptPublic(decrypted, 'utf8');
console.log('decrypted a: ', decrypted);
console.log('=========================');

