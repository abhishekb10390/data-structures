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
      list.tail = node;
    }
  
  };

  list.removeHead = function() {
    var outhead = list.head.value;
    list.head = list.head.next;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
