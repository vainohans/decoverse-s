const fs = require('fs')
const web3 = require('@solana/web3.js');
const { PublicKey, Keypair } = web3
const bs58 = require('bs58')
const key=JSON.parse(fs.readFileSync('./id.json','utf8'))

const pub = Keypair.fromSecretKey(Uint8Array.from(key))
console.log(bs58.encode(pub.secretKey))
console.log(pub.publicKey.toBase58())
