function translatePigLatin(str) {
    var newString = str + "way";
    
    if (/[qwrtypsdfghjklzxcvbnm]{1,}/i[Symbol.match](str[0])) {
    var firstConsonants = /[qwrtypsdfghjklzxcvbnm]{1,}/i[Symbol.match](str);
    var length = firstConsonants[0].length;
    var newStr = str.substr(length) + firstConsonants + "ay";
    return newStr; 
      
    }
    
    return newString;
  
}
  
document.write(translatePigLatin("Fox"));
