  var Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var instanceOf = {storage: {}, lastNum: 0};

    extend(instanceOf, queueMethods);
    return instanceOf;
  };  
//
  var queueMethods = {};

  queueMethods.enqueue = function(value) {  
    var last = this.lastNum;
    this.storage[last] = value;
    this.lastNum += 1;
  };

  queueMethods.dequeue = function() {
    var firstNum = Object.keys(this.storage)[0];
    var out = this.storage[firstNum];
    delete this.storage[firstNum];
    return out;
  };

  queueMethods.size = function() {
    return Object.keys(this.storage).length;
  };

  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
  