

function hasValue(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return true;
    } else {return false}
  }
};

module.exports = hasValue;