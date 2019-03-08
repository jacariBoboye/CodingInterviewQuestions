/*

Encode and Decode TinyURL

TinyURL is a URL shortening service where you enter a URL such
 as https://leetcode.com/problems/design-tinyurl and it returns a 
 short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. 
There is no restriction on how your encode/decode algorithm should work. 
You just need to ensure that a URL can be encoded to a tiny URL and the tiny
 URL can be decoded to the original URL.


*/

var savedURLSByHashValues = {}
var savedURLS = {}
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var encode = function(longUrl) {
	if(savedURLS.hasOwnProperty(longUrl)){return savedURLS[longUrl]}
  else{
    savedURLS[longUrl] = longUrl.hashCode()
    savedURLSByHashValues[savedURLS[longUrl]] = longUrl
  }
    //Convert LongURL to hashCode then save to savedURLS 
    // console.log(savedURLS) 
    // console.log(savedURLSByHashValues) 
    return longUrl.hashCode()
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

var decode = function(shortUrl) {
    if(savedURLSByHashValues.hasOwnProperty(shortUrl)){return savedURLSByHashValues[shortUrl]}
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

var url = "https://leetcode.com/problems/design-tinyurl"


// encode(url)
console.log(decode(encode(url)))

