var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var lastCalled = 1;
  //
  someInstance.enqueue = function(value) {
   
    storage[lastCalled] = value;
    lastCalled += 1;
  };

  someInstance.dequeue = function() {
  
    var firstNum = Object.keys(storage)[0];
    var firstOut = storage[firstNum];
    delete storage[firstNum];
    return firstOut;
  }; 

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
}; 
