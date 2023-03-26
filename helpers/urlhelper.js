const crypto = require('crypto');
const Url = require('../model/urls');

const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const base = alphabet.length;

  // Define a function to generate a unique hash for a given URL
  async function hashUrl(url) {
    const sha256 = await crypto.createHash('sha256');
    sha256.update(url);
    return sha256.digest('hex');
  }

    // Define a function to encode a number as a base62 string
     function encode(num) {
        let encoded = '';
        while (num) {
          const remainder = num % base;
          num = Math.floor(num / base);
          encoded = alphabet[remainder].toString() + encoded;
        }
        return encoded;
      }
    
  // Define a function to generate a new short URL for a given long URL
  async function generateShortUrl(longUrl) {
    const hash = await  hashUrl(longUrl);
    const hashNum = await parseInt(hash, 16);
    const shortUrl = await encode(hashNum);
    return shortUrl

  }

  module.exports.generateShortUrl = generateShortUrl;