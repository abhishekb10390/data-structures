

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else if (this.retrieve(k) !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      this._storage[index][i][0] = k;
      this._storage[index][i][1] = v;
      break;
    } 
  } else {
    this._storage[index].push([k, v]);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index].forEach(function(ele, i, arr) {
    if (ele[0] === k) {
      arr.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


