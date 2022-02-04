module.exports = countOccurences;


function countOccurences(str) {
  let words = str.split(' '); //zamieniam zdanie na tablicę słów
  let obj = {};
  //w pętli for tworzę obiekt w którym zliczam poszczeólne słowa
  for (let i=0; i<words.length; i++){
    if (Object.keys(obj).includes(words[i])) {
      obj[words[i]] += 1;
    } else {
      obj[words[i]] = 1;
    }
  }
  let objRev = {};
  //w pętli for tworzę obiekt w oparciu o stworzony wcześniej 'obj' zamieniam klucze z wartościami i zliczam
  for (let key in obj) {
    if (Object.keys(objRev).includes(obj[key].toString())){
      objRev[obj[key]].push(key);
    } else {
      objRev[obj[key]] = [key];
    }
  }
  return objRev;
};

console.log(countOccurences("hello is it you hello hello"));

