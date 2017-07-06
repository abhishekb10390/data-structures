var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastNum = 1;
  //
  someInstance.push = function(value) {
  
    storage[lastNum] = value;
    lastNum += 1;
  };

  someInstance.pop = function() {
    lastNum -= 1;
    var popped = storage[lastNum];
    delete storage[lastNum];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
 






