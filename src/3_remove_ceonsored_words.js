module.exports = rmCensored;

function rmCensored(obj) {
  for (let key in obj) {
    //sprawdzam czy znak '*' znajduje się w kluczu lub wartości obiektu (indexOf wyrzuca wartość -1 jeśli znaku nie ma,
    // w przeciwnym wypadku zwraca index pod którym znajduje się znak w danym słowie)
    if (key.indexOf('*') != -1 || obj[key].indexOf('*') != -1) {
      delete obj[key];
    }
  }
};
