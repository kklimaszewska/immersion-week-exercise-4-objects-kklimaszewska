module.exports = sortWords;


function sortWords(tab) {
  let obj = {
    'odd': [],
    'even': [],
  };
  for (let i=0; i<tab.length;i++) {
    if (tab[i].length%2 == 0) {
      obj['even'].push(tab[i]);
    } else {
      obj['odd'].push(tab[i]);
    };
  };
  return obj;
};