var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage.forEach(function(ele, i, arr) {
    if (ele === item) {
      arr.splice(i, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
