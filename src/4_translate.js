module.exports = translate;


function translate(obj, str) {
  let words = str.split(' '); 
  for (let i=0; i<words.length; i++){
    if (!obj.hasOwnProperty(words[i])) {
      return ("Error: missing value");
    } else {
      words[i] = obj[words[i]];
    }
  }
  return words.join(' ');
};


const dictionary = {
  "je": "I",
  "suis": "am",
  "pere": "father",
  "ton": "your"};

console.log(translate (dictionary, "je suis ton pere"));