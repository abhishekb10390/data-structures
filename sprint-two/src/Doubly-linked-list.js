var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }
  
  };

  list.removeHead = function() {
    var outhead = list.head.value;
    list.head = list.head.next;
    list.head.previous = null;
    return outhead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;  
      }   
    }
    return (currentNode.value === target);
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
    }
  };

  list.removeTail = function() {
    var currentNode = list.head; 
    if (currentNode.next.next === null) {
      var tailOut = list.tail;
      list.tail = list.head;
      return tail;
    }
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    var tail = list.tail;
    list.tail = currentNode.next;
    return tail;
  };
  

  return list;
};


var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
