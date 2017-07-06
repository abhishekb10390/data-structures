var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOf = Object.create(stackMethods);
  instanceOf.storage = {};
  instanceOf.lastNum = 1;
    return instanceOf;
};
//
var stackMethods = {};

  stackMethods.push = function(value) {  
    var last = this.lastNum;
    this.storage[last] = value;
    this.lastNum += 1;
  };

  stackMethods.pop = function() {
    this.lastNum -= 1;
    var out = this.storage[this.lastNum];
    delete this.storage[this.lastNum];
    return out;
  };

  stackMethods.size = function() {
    return Object.keys(this.storage).length;
  };  