var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);
  var recurse = function(node) {
    //base cases
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        recurse.call(this.left, node);
      }
    } else {
      if (this.right === null) {
        this.right = node;
      } else {
        recurse.call(this.right, node);
      }
    }   
  };
  recurse.call(this, node); 
};

BinarySearchTree.prototype.contains = function(value) {
  
  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  if (this.right === null && this.left === null) {
    cb(this.value);
  }
  if (this.right !== null && this.left === null) {
    cb(this.value);
    this.right.depthFirstLog(cb);
  }
  if (this.left !== null && this.right === null) {
    cb(this.value);
    this.left.depthFirstLog(cb);
  } 
  if (this.left !== null && this.right !== null) {
    cb(this.value);
    this.left.depthFirstLog(cb);
    this.right.depthFirstLog(cb);
  }
};
  
/*
 * Complexity: What is the time complexity of the above functions?
 */
