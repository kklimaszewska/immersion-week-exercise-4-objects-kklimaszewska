module.exports = hasValueDepth;

function hasValueDepth(objct, val) {
  // funkcja toTab wchodzi w zagniedżdżone obiekty i ich wartości przenosi do tabeli
  function toTab(obj, tab) {
    for (let key in obj) {
      //sprawdzam czy wartość obiektu jest typu 'obiekt'
      if (typeof(obj[key]) === 'object') {
        toTab(obj[key], tab); // jeśli tak to uruchamiam funkcję toTab dla tego obiektu
      } else {tab.push(obj[key]);} //jeśli nie to wartość jest zapisywana do tabeli
    }
  }
//inicjacja pustej tabeli i wrzucenie do niej wartości z zagnieżdżonego obiektu
  let tabOfValues = [];
  toTab(objct, tabOfValues);

//sprawdzenie czy podana wartość znajduje się w utworzonej wyżej tabeli
if (tabOfValues.includes(val)) {
  return true;
} else {
  return false
}
};



//weryfikacja
const obj = {
  hello: "world",
  goDeeper: {
    1961: "Barack Obama",
    1964: "Michelle Obama",
    1935: "Elvis Presley",
    1984: {
      author: "George Orwell",
      genre: "dystopia",
    },
  },
};


console.log(hasValueDepth(obj, "hello"));
console.log(hasValueDepth(obj, "Elvis Presley"));
console.log(hasValueDepth(obj, "author"));
console.log(hasValueDepth(obj, "dystopia"));