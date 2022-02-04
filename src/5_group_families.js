module.exports = groupFamilies;

function groupFamilies(tab) {
  let obj = {}
  for (let i=0; i<tab.length; i++) {
    if (!obj.hasOwnProperty(tab[i].surname)) {
      obj[tab[i].surname] = [tab[i].name];
    } else {
      obj[tab[i].surname].push(tab[i].name)
    }
  }

  return obj;
};


const people = [
  {"name": "Barack",   "surname": "Obama"},
  {"name": "Michelle", "surname": "Obama"},
  {"name": "Donald",   "surname": "Trump"}
]

console.log(groupFamilies(people));