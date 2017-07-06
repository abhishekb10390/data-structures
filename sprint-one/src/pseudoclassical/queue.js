var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastNum = 1;
};
//
  Queue.prototype.enqueue = function(value) {  
    var last = this.lastNum;
    this.storage[last] = value;
    this.lastNum += 1;
  };

  Queue.prototype.dequeue = function() {
    var firstNum = Object.keys(this.storage)[0];
    var out = this.storage[firstNum];
    delete this.storage[firstNum];
    return out;
  };

  Queue.prototype.size = function() {
    return Object.keys(this.storage).length;
  }; 