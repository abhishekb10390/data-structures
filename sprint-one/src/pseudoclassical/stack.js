var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastNum = 1;
};
//
  Stack.prototype.push = function(value) {  
    var last = this.lastNum;
    this.storage[last] = value;
    this.lastNum += 1;
  };

  Stack.prototype.pop = function() {
    this.lastNum -= 1;
    var out = this.storage[this.lastNum];
    delete this.storage[this.lastNum];
    return out;
  };

  Stack.prototype.size = function() {
    return Object.keys(this.storage).length;
  }; 
 